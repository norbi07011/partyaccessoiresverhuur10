import React, { useState } from 'react';
import { Language } from '../constants';

const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);
const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

interface PermitsProps {
    t: (key: keyof Language) => string;
}

const Permits: React.FC<PermitsProps> = ({ t }) => {
    const [activeTab, setActiveTab] = useState<'denhaag' | 'westland'>('denhaag');

    return (
        <section id="permits" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="logo-font text-4xl font-bold">{t('permits.title')}</h2>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="neon-panel !p-1.5 !rounded-full flex gap-2">
                        <button
                            onClick={() => setActiveTab('denhaag')}
                            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${activeTab === 'denhaag' ? 'bg-[var(--c-neon-purple)] text-white shadow-[0_0_15px_var(--c-neon-pink)]' : 'bg-transparent text-[#d8b4fe]'}`}
                        >
                            {t('permits.tab.denhaag')}
                        </button>
                        <button
                            onClick={() => setActiveTab('westland')}
                            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${activeTab === 'westland' ? 'bg-[var(--c-neon-purple)] text-white shadow-[0_0_15px_var(--c-neon-pink)]' : 'bg-transparent text-[#d8b4fe]'}`}
                        >
                            {t('permits.tab.westland')}
                        </button>
                    </div>
                </div>

                {activeTab === 'denhaag' && (
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="glowing-panel-container">
                            <div className="neon-panel p-6 flex flex-col h-full">
                                <ClipboardIcon />
                                <h3 className="logo-font text-xl font-bold mt-3">{t('permits.dh.subsidie.title')}</h3>
                                <span className="inline-block mt-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/50 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full self-start">{t('permits.dh.subsidie.badge')}</span>
                                <ul className="list-decimal list-inside my-4 text-[#c8bfff] space-y-2 pl-2 flex-grow">
                                    <li>{t('permits.dh.subsidie.step1')}</li>
                                    <li>{t('permits.dh.subsidie.step2')}</li>
                                    <li>{t('permits.dh.subsidie.step3')}</li>
                                </ul>
                                <a href="https://www.denhaag.nl/nl/subsidies/subsidie-kleine-publieksevenementen-aanvragen" target="_blank" rel="noopener noreferrer" className="btn-primary w-full" data-analytics-click="denhaag-subsidie">
                                    {t('permits.dh.subsidie.cta')}
                                </a>
                                <p className="text-xs text-center text-gray-400 mt-2">{t('permits.cta.micro')}</p>
                            </div>
                        </div>
                        <div className="glowing-panel-container">
                            <div className="neon-panel p-6 flex flex-col h-full">
                                <ClipboardIcon />
                                <h3 className="logo-font text-xl font-bold mt-3">{t('permits.dh.melding.title')}</h3>
                                <ul className="list-decimal list-inside my-4 text-[#c8bfff] space-y-2 pl-2 flex-grow mt-9">
                                    <li>{t('permits.dh.melding.step1')}</li>
                                    <li>{t('permits.dh.melding.step2')}</li>
                                    <li>{t('permits.dh.melding.step3')}</li>
                                </ul>
                                <a href="https://formulieren.denhaag.nl/formulier/nl-NL/evEvenementMelding.aspx" target="_blank" rel="noopener noreferrer" className="btn-primary w-full" data-analytics-click="denhaag-melding">
                                    {t('permits.dh.melding.cta')}
                                </a>
                                <p className="text-xs text-center text-gray-400 mt-2">{t('permits.cta.micro')}</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'westland' && (
                    <div className="max-w-2xl mx-auto">
                        <div className="glowing-panel-container">
                            <div className="neon-panel p-6 flex flex-col h-full">
                                <ShieldIcon />
                                <h3 className="logo-font text-xl font-bold mt-3">{t('permits.wl.title')}</h3>
                                <p className="text-sm text-gray-300 my-2">{t('permits.wl.desc')}</p>
                                <ul className="list-decimal list-inside my-4 text-[#c8bfff] space-y-2 pl-2 flex-grow">
                                    <li>{t('permits.wl.step1')}</li>
                                    <li>{t('permits.wl.step2')}</li>
                                    <li>{t('permits.wl.step3')}</li>
                                </ul>
                                <a href="https://www.gemeentewestland.nl/aanvragen-en-regelen/ondernemen-en-arbeidsmigratie/vergunningen/evenement-organiseren/melden-of-vergunning" target="_blank" rel="noopener noreferrer" className="btn-primary w-full" data-analytics-click="westland-vergunning">
                                    {t('permits.wl.cta')}
                                </a>
                                <p className="text-xs text-center text-gray-400 mt-2">{t('permits.cta.micro')}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Permits;