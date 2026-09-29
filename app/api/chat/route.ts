import { NextResponse } from "next/server";
import { portfolioContext } from "@/data/PortfolioContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const rateLimitMap = new Map<string, RateLimitEntry>();

const RATE_LIMIT = 10;
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimitMap.get(ip);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });

    return true;
  }

  if (current.count >= RATE_LIMIT) {
    return false;
  }

  current.count += 1;
  rateLimitMap.set(ip, current);

  return true;
}

export async function POST(request: Request) {
  try {
    /*
     * BASIC RATE LIMIT
     *
     * Allows 10 requests every 10 minutes per IP.
     *
     * This is useful for preventing casual abuse of the
     * public portfolio chatbot.
     */
    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          message:
            "You've reached the temporary chat limit. Please try again later or [email Diego](mailto:diegogalvis682@gmail.com).",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    const messages: ChatMessage[] = body.messages ?? [];

    /*
     * BASIC INPUT VALIDATION
     */
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        {
          message: "Please send a question about Diego's portfolio.",
        },
        { status: 400 },
      );
    }

    const lastMessage = messages[messages.length - 1];

    if (
      !lastMessage ||
      lastMessage.role !== "user" ||
      typeof lastMessage.content !== "string"
    ) {
      return NextResponse.json(
        {
          message: "Invalid message.",
        },
        { status: 400 },
      );
    }

    /*
     * Prevent extremely long prompts from being sent to Azure.
     */
    if (lastMessage.content.length > 700) {
      return NextResponse.json(
        {
          message:
            "Please keep your question concise and related to Diego's professional portfolio.",
        },
        { status: 400 },
      );
    }

    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;

    if (!endpoint || !apiKey || !deployment) {
      console.error("Missing Azure OpenAI environment variables.");

      return NextResponse.json(
        {
          message: "The portfolio assistant is not configured yet.",
        },
        { status: 500 },
      );
    }

    const systemInstructions = `
You are Diego Galvis's professional AI portfolio assistant.

Your primary audience is business owners exploring a digital product idea, as well as recruiters and collaborators.
Help them understand Diego's documented work and what kinds of projects he can discuss.
Reply in the language of the visitor's latest message (Spanish or English).
Never guarantee customer growth, sales or a particular business result.

STRICT RULES

1. Use ONLY the portfolio information provided below.

2. Never invent, assume, exaggerate, or infer undocumented:
   - Experience
   - Skills
   - Education
   - Certifications
   - Achievements
   - Employment
   - Personal information

3. If the question can be answered using Diego's portfolio,
   answer clearly and professionally.

4. Use specific projects as evidence when appropriate.

5. Keep responses concise.

6. Prefer:
   - 1 short paragraph
   OR
   - 3 to 5 short bullet points

7. Avoid long introductions and unnecessary explanations.

8. Do not repeat the user's question.

9. If the user asks about a technology Diego knows,
   mention the project or experience where he used it whenever possible.

10. If the question is professionally related to Diego but the
    information is not available, say that you do not have enough information, then provide the appropriate clickable WhatsApp or email link from the context.

11. If the question is unrelated to Diego or his professional portfolio,
    briefly explain in the visitor's language that you can discuss Diego's work, services, skills and background.

12. Do not answer general knowledge questions unless the user specifically
    asks how the topic relates to Diego's documented experience.

13. Never claim Diego knows a technology simply because it is related
    to another technology he has used.

14. Maximum response length: approximately 120 words.

15. If the user asks to see, open, view, visit, access, or try a project,
    provide the specific project link available in the portfolio context. Some experiences have no public URL; do not invent one.

16. Prefer direct project links over Diego's general portfolio URL.

17. If both a demo and GitHub link are available, provide both when relevant.

18. Do not mention projects, jobs or links absent from this current context, even if the visitor asks by name. Explain that they are not featured in this portfolio and offer the current work.

19. Format EVERY URL, email address and phone contact as a clickable Markdown link using the exact destination in the context: [label](URL), [email](mailto:...), [phone](tel:...). Never print a bare URL or bare email address.

20. Never invent a project URL.

21. If the user asks for contact channels, offer WhatsApp first for business inquiries, with the Spanish prefilled message for Spanish visitors and the English prefilled message for English visitors. Provide other requested channels as clickable links.

22. Do not describe certifications marked in progress as earned. DIALAC is completed, not in progress.

PORTFOLIO CONTEXT

${portfolioContext}
`;

    /*
     * Only send recent conversation history.
     *
     * This controls token usage and prevents conversations
     * from becoming unnecessarily expensive.
     */
    const recentMessages = messages.slice(-6);

    const conversation = recentMessages
      .map(
        (message) =>
          `${message.role === "user" ? "User" : "Assistant"}: ${
            message.content
          }`,
      )
      .join("\n\n");

    const response = await fetch(
      `${endpoint.replace(/\/$/, "")}/openai/v1/responses`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },

        body: JSON.stringify({
          model: deployment,

          instructions: systemInstructions,

          input: conversation,

          /*
           * Prevent excessively long AI responses
           * and reduce token costs.
           */
          max_output_tokens: 300,
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Azure OpenAI error:", response.status, errorText);

      return NextResponse.json(
        {
          message:
            "I'm having trouble responding right now. You can [email Diego](mailto:diegogalvis682@gmail.com).",
        },
        { status: 500 },
      );
    }

    const data = await response.json();

    let message = "";

    /*
     * Responses API may return output_text directly
     * or through the output content array.
     */
    if (typeof data.output_text === "string") {
      message = data.output_text;
    } else if (Array.isArray(data.output)) {
      for (const item of data.output) {
        if (!Array.isArray(item.content)) continue;

        for (const content of item.content) {
          if (
            content.type === "output_text" &&
            typeof content.text === "string"
          ) {
            message += content.text;
          }
        }
      }
    }

    if (!message.trim()) {
      message =
        "I don't have enough information to answer that accurately, but you can [email Diego](mailto:diegogalvis682@gmail.com).";
    }

    return NextResponse.json({
      message: message.trim(),
    });
  } catch (error) {
    console.error("Portfolio chatbot error:", error);

    return NextResponse.json(
      {
        message:
          "I'm having trouble responding right now. You can [email Diego](mailto:diegogalvis682@gmail.com).",
      },
      { status: 500 },
    );
  }
}
