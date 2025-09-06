import React from 'react';
import { Language } from '../constants';

interface ReviewsProps {
    t: (key: keyof Language) => string;
}

const Reviews: React.FC<ReviewsProps> = ({ t }) => {
    const bubbles = [
        { icon: '🚚', title: t('why.fast'), desc: t('why.fastDesc'), colorClass: 'border-[rgba(124,233,255,.45)] shadow-[0_0_22px_rgba(124,233,255,.3)]' },
        { icon: '🌱', title: t('why.price'), desc: t('why.priceDesc'), colorClass: 'border-[rgba(52,211,153,.5)] shadow-[0_0_22px_rgba(52,211,153,.35)]' },
        { icon: '🛠️', title: t('why.gear'), desc: t('why.gearDesc'), colorClass: 'border-[rgba(96,165,250,.5)] shadow-[0_0_22px_rgba(96,165,250,.35)]' },
        { icon: '⏰', title: t('why.ontime'), desc: t('why.ontimeDesc'), colorClass: 'border-[rgba(232,121,249,.45)] shadow-[0_0_22px_rgba(232,121,249,.38)]' },
        { icon: '⭐', title: t('why.team'), desc: t('why.teamDesc'), colorClass: 'border-[rgba(245,158,11,.5)] shadow-[0_0_22px_rgba(245,158,11,.35)]' },
        { icon: '🎧', title: t('why.support'), desc: t('why.supportDesc'), colorClass: 'border-[rgba(52,211,153,.5)] shadow-[0_0_22px_rgba(52,211,153,.35)]' }
    ];

    return (
        <>
            <section id="reviews" className="relative py-16 pattern-bg overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="logo-font text-3xl font-bold mb-16 text-center">{t('reviews.title')}</h2>
                    <div className="grid lg:grid-cols-2 gap-y-16 gap-x-8 items-center">
                        
                        <div className="glowing-panel-container">
                            <div className="neon-panel p-8 flex flex-col items-center text-center h-full">
                                <img src="/assets/party-accessoires-verhuur-logo.jpg" alt="Logo" className="h-16 mb-4 rounded-lg" />
                                <div className="flex text-yellow-400 text-4xl mb-2">
                                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                                </div>
                                <p className="text-4xl font-black text-white">5,0 / 5</p>
                                <p className="text-gray-400 mt-1 mb-6">Na podstawie opinii klientów</p>
                                <a href="https://www.google.com/search?q=Party+Accessoires+Verhuur+reviews" target="_blank" rel="noopener noreferrer" className="btn-primary w-full max-w-xs mt-auto">
                                    Zobacz wszystkie opinie
                                </a>
                                <p className="text-xs text-gray-500 mt-3">
                                    Jeśli widżet się nie załaduje, <a href="#" className="text-cyan-400 hover:underline">zobacz opinie tutaj</a>.
                                </p>
                            </div>
                        </div>

                        
                        <div className="flex flex-col items-center text-center">
                             <p className="text-[#c3cdee] opacity-90 mb-10 max-w-2xl mx-auto">{t('why.lead')}</p>
                            
                            <div className="why-us-menu-container">
                                <input type="checkbox" id="why-us-toggle" className="peer" />
                                <label htmlFor="why-us-toggle" className="why-us-toggle-btn" title="Kliknij, by odkryć nasze zalety">
                                    <svg className="w-12 h-12 icon-open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25h.015v.015H12v-.015z" />
                                    </svg>
                                    <svg className="w-12 h-12 icon-close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </label>

                                <ul className="why-us-menu-items">
                                    {bubbles.map((item, index) => (
                                        <li key={index} style={{ '--i': index } as React.CSSProperties}>
                                            <div className="why-us-bubble">
                                                <div className={`icon-wrapper ${item.colorClass}`}>
                                                    <span className="text-4xl">{item.icon}</span>
                                                </div>
                                                <div className="text-content">
                                                    <div className="font-black text-lg">{item.title}</div>
                                                    <div className="text-[#9fb0d3] text-sm">{item.desc}</div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                     <div className="mt-16 pt-12 text-center">
                        <h3 className="text-[#ff6bd2] logo-font text-xl">{t('why.foot')}</h3>
                    </div>
                </div>
            </section>
            <style>{`
                .why-us-menu-container {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 4rem auto;
                    transition: height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .why-us-menu-container:has(.peer:checked) {
                    height: 500px;
                }
                .why-us-menu-container input[type="checkbox"] {
                    display: none;
                }
                .why-us-toggle-btn {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #6d28d9, #22d3ee);
                    color: #071017;
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                    z-index: 10;
                    box-shadow: 0 10px 30px rgba(34, 211, 238, .35);
                    transition: transform 0.3s ease, background 0.3s ease;
                }
                .why-us-toggle-btn:hover {
                    transform: scale(1.05);
                }
                .why-us-toggle-btn .icon-open,
                .why-us-toggle-btn .icon-close {
                    position: absolute;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                .why-us-toggle-btn .icon-close {
                    opacity: 0;
                    transform: rotate(-90deg) scale(0.5);
                }
                .peer:checked + .why-us-toggle-btn {
                    background: linear-gradient(135deg, #5b21b6, #164e63);
                }
                .peer:checked + .why-us-toggle-btn .icon-open {
                    opacity: 0;
                    transform: rotate(90deg) scale(0.5);
                }
                .peer:checked + .why-us-toggle-btn .icon-close {
                    opacity: 1;
                    transform: rotate(0deg) scale(1);
                }
                .why-us-menu-items {
                    position: absolute;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                .why-us-menu-items li {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    transform-origin: center;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    opacity: 0;
                    transform: rotate(calc(360deg / 6 * var(--i))) translateY(0px) scale(0.5);
                    transition-delay: calc(0.05s * var(--i));
                }
                .peer:checked ~ .why-us-menu-items {
                    pointer-events: auto;
                }
                .peer:checked ~ .why-us-menu-items li {
                    opacity: 1;
                    transform: rotate(calc(360deg / 6 * var(--i))) translateY(-220px) scale(1);
                }
                @media (max-width: 1023px) {
                  .peer:checked ~ .why-us-menu-items li {
                      transform: rotate(calc(360deg / 6 * var(--i))) translateY(-180px) scale(1);
                  }
                  .why-us-menu-container:has(.peer:checked) {
                      height: 420px;
                  }
                }
                @media (max-width: 767px) {
                  .peer:checked ~ .why-us-menu-items li {
                      transform: rotate(calc(360deg / 6 * var(--i))) translateY(-140px) scale(0.9);
                  }
                   .why-us-menu-container:has(.peer:checked) {
                      height: 340px;
                  }
                }
                .why-us-bubble {
                  position: absolute;
                  width: 200px;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%) rotate(calc(-360deg / 6 * var(--i)));
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 8px;
                }
                .why-us-bubble .icon-wrapper {
                  width: 84px;
                  height: 84px;
                  border-radius: 50%;
                  display: grid;
                  place-items: center;
                  background: rgba(11,15,32,0.85);
                  -webkit-backdrop-filter: blur(4px);
                  backdrop-filter: blur(4px);
                  border: 1px solid;
                  transition: all 0.2s;
                }
                .why-us-bubble .text-content {
                  text-align: center;
                  opacity: 0;
                  transform: translateY(10px);
                  transition: opacity 0.3s 0.1s, transform 0.3s 0.1s;
                  pointer-events: none;
                }
                .why-us-menu-items li:hover .icon-wrapper {
                  transform: scale(1.1);
                }
                .why-us-menu-items li:hover .text-content {
                  opacity: 1;
                  transform: translateY(0);
                }
            `}</style>
        </>
    );
};

export default Reviews;