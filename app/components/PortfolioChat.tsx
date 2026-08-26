"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
    role: "user" | "assistant";
    content: string;
};

const quickQuestions = [
    "What are Diego's top projects?",
    "What are Diego's technical skills?",
    "What Cloud & AI experience does Diego have?",
    "What is Diego's education?",
    "How can I contact Diego?",
];

export default function PortfolioChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [starting, setStarting] = useState(false);

    const hasStartedRef = useRef(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hi! I'm Diego's AI portfolio assistant. Ask me about his projects, skills, experience, education, certifications, or professional background.",
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, loading]);

    const sendMessage = async (question: string) => {
        if (!question.trim() || loading) return;

        const userMessage: Message = {
            role: "user",
            content: question.trim(),
        };

        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: updatedMessages,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to get response");
            }

            setMessages((current) => [
                ...current,
                {
                    role: "assistant",
                    content: data.message,
                },
            ]);
        } catch (error) {
            console.error(error);

            setMessages((current) => [
                ...current,
                {
                    role: "assistant",
                    content:
                        "I'm having trouble responding right now. You can contact Diego directly at diegogalvis682@gmail.com.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage(input);
    };

    const openChat = () => {
        if (isOpen) {
            setIsOpen(false);
            return;
        }

        setIsOpen(true);

        if (!hasStartedRef.current) {
            setStarting(true);

            setTimeout(() => {
                setStarting(false);
                hasStartedRef.current = true;
            }, 1400);
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed bottom-24 right-5 z-[200] flex h-[560px] w-[calc(100vw-2.5rem)] max-w-[370px] flex-col overflow-hidden rounded-[22px] border border-white/15 bg-[#10192c] shadow-[0_25px_80px_rgba(0,0,0,0.55)]">

                    {/* HEADER */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#162239] px-4 py-4">
                        <div className="flex items-center gap-3">

                            {/* AI ICON */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 3v4" />
                                    <path d="M12 17v4" />
                                    <path d="M3 12h4" />
                                    <path d="M17 12h4" />
                                    <path d="m5.6 5.6 2.8 2.8" />
                                    <path d="m15.6 15.6 2.8 2.8" />
                                    <path d="m18.4 5.6-2.8 2.8" />
                                    <path d="m8.4 15.6-2.8 2.8" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-sm font-bold text-white">
                                    Diego AI Assistant
                                </p>

                                <div className="mt-1 flex items-center gap-1.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-40" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                                    </span>

                                    <span className="text-[11px] text-slate-300">
                                        {starting ? "Connecting..." : "Online"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* CLOSE */}
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close assistant"
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            ×
                        </button>
                    </div>

                    {/* CONTENT */}
                    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">

                        {starting ? (
                            /* STARTUP SCREEN */
                            <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">

                                {/* ANIMATED AI ICON */}
                                <div className="relative mb-7 flex h-24 w-24 items-center justify-center">

                                    {/* OUTER PULSE */}
                                    <span className="absolute h-20 w-20 animate-ping rounded-full bg-lime-400/10" />

                                    {/* ROTATING RING */}
                                    <span className="absolute h-20 w-20 animate-spin rounded-full border-2 border-transparent border-r-lime-400/30 border-t-lime-400" />

                                    {/* SECOND RING */}
                                    <span className="absolute h-16 w-16 animate-[spin_2s_linear_infinite_reverse] rounded-full border border-transparent border-b-lime-300/50 border-l-lime-300/20" />

                                    {/* CENTER */}
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-black shadow-[0_0_35px_rgba(163,230,53,0.35)]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 3v4" />
                                            <path d="M12 17v4" />
                                            <path d="M3 12h4" />
                                            <path d="M17 12h4" />
                                            <path d="m5.6 5.6 2.8 2.8" />
                                            <path d="m15.6 15.6 2.8 2.8" />
                                            <path d="m18.4 5.6-2.8 2.8" />
                                            <path d="m8.4 15.6-2.8 2.8" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="mb-2 text-base font-bold text-white">
                                    Getting things ready...
                                </h3>

                                <p className="text-sm text-slate-400">
                                    Diego AI is warming up
                                </p>
                            </div>
                        ) : messages.length === 1 && !loading ? (
                            /* WELCOME SCREEN */
                            <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">

                                <div className="mb-5 flex flex-col items-center text-center">

                                    {/* LARGE AI ICON */}
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-lime-400 text-black shadow-[0_10px_30px_rgba(163,230,53,0.18)]">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-7 w-7"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.9"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 3v4" />
                                            <path d="M12 17v4" />
                                            <path d="M3 12h4" />
                                            <path d="M17 12h4" />
                                            <path d="m5.6 5.6 2.8 2.8" />
                                            <path d="m15.6 15.6 2.8 2.8" />
                                            <path d="m18.4 5.6-2.8 2.8" />
                                            <path d="m8.4 15.6-2.8 2.8" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold text-white">
                                        Hi there!
                                    </h3>

                                    <p className="max-w-[280px] text-sm leading-6 text-slate-400">
                                        I&apos;m Diego&apos;s AI portfolio assistant.
                                        Ask me about his projects, skills,
                                        experience, education, or certifications.
                                    </p>
                                </div>

                                {/* QUICK QUESTIONS */}
                                <div className="space-y-2">
                                    {quickQuestions.map((question) => (
                                        <button
                                            key={question}
                                            onClick={() =>
                                                sendMessage(question)
                                            }
                                            className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-300 transition duration-200 hover:border-lime-400/40 hover:bg-lime-400/[0.06] hover:text-white"
                                        >
                                            <span>{question}</span>

                                            <span className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-lime-400">
                                                →
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* CHAT MESSAGES */
                            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">

                                {/* Hide initial welcome message after chat starts */}
                                {messages.slice(1).map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${
                                            message.role === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                                                message.role === "user"
                                                    ? "rounded-br-md bg-lime-400 font-medium text-black"
                                                    : "rounded-bl-md border border-white/5 bg-white/[0.06] text-slate-300"
                                            }`}
                                        >
                                            {message.role === "assistant" ? (
                                                <ReactMarkdown
                                                    components={{
                                                        a: ({
                                                            href,
                                                            children,
                                                        }) => (
                                                            <a
                                                                href={href}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="font-semibold text-lime-400 underline decoration-lime-400/50 underline-offset-4 transition hover:text-lime-300"
                                                            >
                                                                {children}
                                                            </a>
                                                        ),

                                                        strong: ({
                                                            children,
                                                        }) => (
                                                            <strong className="font-bold text-white">
                                                                {children}
                                                            </strong>
                                                        ),

                                                        ul: ({ children }) => (
                                                            <ul className="ml-4 list-disc space-y-1.5">
                                                                {children}
                                                            </ul>
                                                        ),

                                                        ol: ({ children }) => (
                                                            <ol className="ml-4 list-decimal space-y-1.5">
                                                                {children}
                                                            </ol>
                                                        ),

                                                        li: ({ children }) => (
                                                            <li className="pl-1 text-slate-300">
                                                                {children}
                                                            </li>
                                                        ),

                                                        p: ({ children }) => (
                                                            <p className="mb-2 last:mb-0">
                                                                {children}
                                                            </p>
                                                        ),
                                                    }}
                                                >
                                                    {message.content}
                                                </ReactMarkdown>
                                            ) : (
                                                <span className="whitespace-pre-wrap">
                                                    {message.content}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* LOADING */}
                                {loading && (
                                    <div className="flex justify-start">
                                        <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.06] px-4 py-3">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400" />
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400 [animation-delay:150ms]" />
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400 [animation-delay:300ms]" />
                                        </div>
                                    </div>
                                )}

                                <div ref={messagesEndRef} />
                            </div>
                        )}

                        {/* INPUT */}
                        <form
                            onSubmit={handleSubmit}
                            className="border-t border-white/10 bg-[#10192c] p-3"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    value={input}
                                    onChange={(event) =>
                                        setInput(event.target.value)
                                    }
                                    placeholder={
                                        starting
                                            ? "Loading..."
                                            : "Type a message..."
                                    }
                                    disabled={starting || loading}
                                    className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#0b0f19] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-lime-400/40 disabled:cursor-not-allowed disabled:opacity-60"
                                />

                                <button
                                    type="submit"
                                    disabled={
                                        starting ||
                                        loading ||
                                        !input.trim()
                                    }
                                    aria-label="Send message"
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-black transition duration-200 hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 2 11 13" />
                                        <path d="m22 2-7 20-4-9-9-4Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        {/* FOOTER */}
                        <div className="border-t border-white/5 bg-[#10192c] py-2 text-center">
                            <p className="text-[10px] text-slate-500">
                                Powered by Microsoft Foundry & Diego Galvis
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* FLOATING CHAT BUTTON */}
            <button
                onClick={openChat}
                aria-label="Open Diego AI Assistant"
                className="fixed bottom-6 right-6 z-[200] flex h-14 w-14 items-center justify-center rounded-full border border-lime-300 bg-lime-400 text-black shadow-[0_8px_30px_rgba(163,230,53,0.30)] transition duration-300 hover:scale-110 hover:bg-lime-300"
            >
                {isOpen ? (
                    <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.3"
                        strokeLinecap="round"
                    >
                        <path d="M6 6l12 12" />
                        <path d="M18 6L6 18" />
                    </svg>
                ) : (
                    <svg
                        viewBox="0 0 24 24"
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.8 9.8 0 0 1-4-.8L3 21l1.7-4.4A8.4 8.4 0 0 1 3 11.5C3 6.8 7 3 12 3s9 3.8 9 8.5Z" />
                        <path d="M8 9.5h8" />
                        <path d="M8 13h5" />
                    </svg>
                )}
            </button>
        </>
    );
}