import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Language, PRODUCTS, LanguageCode } from '../constants';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface EventPlannerProps {
    t: (key: keyof Language) => string;
    lang: LanguageCode;
}

interface Plan {
    planTitle: string;
    summary: string;
    recommendedProducts: { productName: string; reasoning: string }[];
    decorationIdeas: string[];
    activitySuggestions: string[];
    timeline: { time: string; task: string }[];
}

const EventPlanner: React.FC<EventPlannerProps> = ({ t, lang }) => {
    const [eventType, setEventType] = useState('urodziny');
    const [guests, setGuests] = useState(25);
    const [budget, setBudget] = useState(500);
    const [vibe, setVibe] = useState('neonowa impreza w ogrodzie');

    const [isLoading, setIsLoading] = useState(false);
    const [plan, setPlan] = useState<Plan | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    const { addToCart } = useCart();

    const findProductByName = (name: string): Product | undefined => {
        return PRODUCTS.find(p => p.name.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(p.name.toLowerCase()));
    };

    const generatePlan = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setPlan(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const productListString = PRODUCTS.map(p => p.name).join(', ');
            const prompt = `
            You are an expert event planner for a party rental company called "Party Accessoires Verhuur".
            Based on the following user requirements, create a concise and exciting event plan.
            The company rents out the following products: ${productListString}.
            Prioritize recommending 2-3 products from this list in your plan.

            Event Details:
            - Language for response: ${lang === 'pl' ? 'Polish' : 'Dutch'}
            - Type: ${eventType}
            - Guests: ${guests}
            - Budget: €${budget}
            - Vibe/Theme: ${vibe}

            Generate a plan in JSON format. The plan must include a title, a short summary, a list of recommended products from the company's inventory with a reason for each, decoration ideas, activity suggestions, and a simple timeline.
            When recommending products, use the exact names from the provided product list.
            `;

            const responseSchema = {
                type: Type.OBJECT,
                properties: {
                    planTitle: { type: Type.STRING, description: 'Creative title for the event plan.' },
                    summary: { type: Type.STRING, description: 'A short, engaging summary of the event concept.' },
                    recommendedProducts: {
                        type: Type.ARRAY,
                        description: 'List of 2-3 recommended rental products.',
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                productName: { type: Type.STRING, description: `Name of the product, must be one of: ${productListString}` },
                                reasoning: { type: Type.STRING, description: 'Brief reason why this product fits the event.' }
                            }
                        }
                    },
                    decorationIdeas: {
                        type: Type.ARRAY,
                        description: 'A few creative decoration ideas.',
                        items: { type: Type.STRING }
                    },
                    activitySuggestions: {
                        type: Type.ARRAY,
                        description: 'Fun activities suitable for the event.',
                        items: { type: Type.STRING }
                    },
                    timeline: {
                        type: Type.ARRAY,
                        description: 'A simple event timeline with 3-4 key points.',
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                time: { type: Type.STRING, description: 'e.g., "Afternoon", "Evening", "8:00 PM"' },
                                task: { type: Type.STRING, description: 'The activity or task at that time.' }
                            }
                        }
                    }
                }
            };

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema,
                },
            });

            const jsonText = response.text.trim();
            const parsedPlan = JSON.parse(jsonText);
            setPlan(parsedPlan);

        } catch (err) {
            console.error("Error generating plan:", err);
            setError(t('planner.error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="event-planner" className="relative py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="logo-font text-4xl font-bold">{t('planner.title')}</h2>
                    <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">{t('planner.subtitle')}</p>
                    <div className="mt-3 inline-block bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full text-white text-sm font-semibold animate-pulse">
                        {t('planner.comingSoon')}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="glowing-panel-container">
                        <form onSubmit={generatePlan} className="neon-panel p-6 space-y-4 flex flex-col h-full">
                            <div>
                                <label htmlFor="eventType" className="block mb-2 font-bold text-cyan-300">{t('planner.eventType.label')}</label>
                                <select id="eventType" value={eventType} onChange={e => setEventType(e.target.value)} className="input w-full">
                                    <option value="urodziny">{t('planner.eventType.birthday')}</option>
                                    <option value="rocznica">{t('planner.eventType.anniversary')}</option>
                                    <option value="impreza dla dzieci">{t('planner.eventType.kids')}</option>
                                    <option value="spotkanie firmowe">{t('planner.eventType.corporate')}</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="guests" className="block mb-2 font-bold text-cyan-300">{t('planner.guests.label')} ({guests})</label>
                                <input type="range" id="guests" min="5" max="200" step="5" value={guests} onChange={e => setGuests(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb" />
                            </div>

                            <div>
                                <label htmlFor="budget" className="block mb-2 font-bold text-cyan-300">{t('planner.budget.label')} (€{budget})</label>
                                <input type="range" id="budget" min="100" max="2000" step="50" value={budget} onChange={e => setBudget(Number(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-thumb" />
                            </div>

                            <div>
                                <label htmlFor="vibe" className="block mb-2 font-bold text-cyan-300">{t('planner.vibe.label')}</label>
                                <input type="text" id="vibe" value={vibe} onChange={e => setVibe(e.target.value)} className="input w-full" placeholder={t('planner.vibe.placeholder')} />
                            </div>
                            
                            <div className="flex-grow"></div>

                            <button type="submit" className="btn-primary w-full !py-3" disabled={isLoading}>
                                {isLoading ? t('planner.loading') : t('planner.button')}
                            </button>
                        </form>
                    </div>

                    <div className="glowing-panel-container">
                        <div className="neon-panel p-6 h-full">
                            {isLoading && (
                                <div className="flex justify-center items-center h-full">
                                    <div className="loader"></div>
                                </div>
                            )}
                            {error && <div className="text-red-400 text-center">{error}</div>}
                            {!plan && !isLoading && !error && <div className="text-center text-gray-400 flex items-center justify-center h-full">{t('planner.getStarted')}</div>}
                            {plan && (
                                <div className="space-y-6 animate-fade-in">
                                    <h3 className="logo-font text-2xl font-bold text-center">{plan.planTitle}</h3>
                                    <p className="text-gray-300 text-center">{plan.summary}</p>
                                    
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-lg text-cyan-400">🎉 {t('planner.results.products')}</h4>
                                        <div className="space-y-3">
                                            {plan.recommendedProducts.map((rec, i) => {
                                                const product = findProductByName(rec.productName);
                                                return (
                                                    <div key={i} className="bg-black/20 p-3 rounded-lg border border-white/10 flex gap-4 items-center">
                                                        {product && <img src={product.img} alt={product.name} className="w-16 h-16 rounded-md object-cover flex-shrink-0" />}
                                                        <div className="flex-grow">
                                                            <strong className="text-white">{rec.productName}</strong>
                                                            <p className="text-sm text-gray-400">{rec.reasoning}</p>
                                                        </div>
                                                        {product && <button onClick={() => addToCart(product)} className="btn-ghost !py-1 !px-2 !text-xs self-start">Dodaj</button>}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-lg text-cyan-400">🎨 {t('planner.results.decorations')}</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                                            {plan.decorationIdeas.map((idea, i) => <li key={i}>{idea}</li>)}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-lg text-cyan-400">🎲 {t('planner.results.activities')}</h4>
                                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                                            {plan.activitySuggestions.map((activity, i) => <li key={i}>{activity}</li>)}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="font-bold text-lg text-cyan-400">🕒 {t('planner.results.timeline')}</h4>
                                        <ul className="space-y-1">
                                            {plan.timeline.map((item, i) => <li key={i} className="text-gray-300"><strong className="text-white font-semibold">{item.time}:</strong> {item.task}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .range-thumb::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: var(--c-neon-cyan);
                    cursor: pointer;
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--c-neon-cyan);
                }
                .range-thumb::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    background: var(--c-neon-cyan);
                    cursor: pointer;
                    border-radius: 50%;
                     box-shadow: 0 0 10px var(--c-neon-cyan);
                }
                .loader {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: 5px solid var(--c-border);
                    border-top-color: var(--c-neon-pink);
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default EventPlanner;