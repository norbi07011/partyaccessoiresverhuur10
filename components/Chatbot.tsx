
import React, { useState, useRef, useEffect } from 'react';
import { Language, BOT_QA } from '../constants';

interface ChatbotProps {
    t: (key: keyof Language) => string;
}

interface Message {
    sender: 'me' | 'ai';
    text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const logRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        const text = inputValue.trim();
        if (!text) return;

        const newMessages: Message[] = [...messages, { sender: 'me', text }];
        
        const answer = BOT_QA.find(qa => qa.k.test(text))?.a || 'Zadaj pytanie o termin/ceny/dostawę lub użyj sekcji Kalendarz/FAQ.';
        newMessages.push({ sender: 'ai', text: answer });

        setMessages(newMessages);
        setInputValue('');
    };

    return (
        <div className="fixed right-[82px] bottom-4 z-30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-[linear-gradient(135deg,#6d28d9,#22d3ee)] grid place-items-center text-[#071017] font-black text-2xl shadow-[0_10px_28px_rgba(34,211,238,.3)] animate-glow"
            >
                🤖
            </button>
            {isOpen && (
                <div className="absolute right-0 bottom-16 w-[90vw] max-w-sm bg-[#0c1230] border border-[#2a2f55] rounded-2xl p-2.5">
                    <div ref={logRef} className="max-h-72 overflow-auto grid gap-2" aria-live="polite">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-lg px-2.5 py-2 ${msg.sender === 'me' ? 'bg-[#112055] text-[#c9e9ff] border border-[#2c4aa0]' : 'bg-[#101635] text-[#cfe1ff] border border-[#374079]'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-1.5 mt-2">
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            className="input flex-1"
                            placeholder="Zapytaj o coś…"
                        />
                        <button onClick={handleSend} className="btn-primary !py-2.5 !px-3">Wyślij</button>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes glow-anim {
                    0%, 100% { box-shadow: 0 10px 28px rgba(34, 211, 238, .3); }
                    50% { box-shadow: 0 10px 40px rgba(34, 211, 238, .5); }
                }
                .animate-glow {
                    animation: glow-anim 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Chatbot;