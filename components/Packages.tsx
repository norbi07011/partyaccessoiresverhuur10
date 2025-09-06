import React from 'react';
import { Language, PACKAGES, LanguageCode } from '../constants';
import { useCart } from '../context/CartContext';
import { Package } from '../types';

interface PackagesProps {
    t: (key: keyof Language) => string;
    lang: LanguageCode;
}

const fmtE = (v: number) => '€' + v;

const PackageCard: React.FC<{ pkg: Package, t: (key: keyof Language) => string, lang: LanguageCode }> = ({ pkg, t, lang }) => {
    const { addToCart } = useCart();
    const isPopular = pkg.popular;
    
    const name = lang === 'pl' ? pkg.name_pl : pkg.name_nl;
    const description = lang === 'pl' ? pkg.description_pl : pkg.description_nl;
    const features = lang === 'pl' ? pkg.features_pl : pkg.features_nl;

    const cardClasses = `
        neon-panel p-6 pt-8 flex flex-col relative rounded-2xl transition-all duration-300 h-full
        ${isPopular ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border-[rgba(158,0,255,0.3)]'}
    `;

    const buttonClasses = `
        btn-primary w-full mt-auto !rounded-lg !py-3 !text-base !font-bold flex items-center justify-center gap-2
        ${isPopular ? 'bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]' : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'}
    `;

    return (
        <div className="glowing-panel-container">
            <article className={cardClasses}>
                {isPopular && (
                    <div className="absolute -top-4 right-6 bg-cyan-400 text-gray-900 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg transform rotate-3 z-10">
                        <span className="mr-1.5">⭐</span> {t('packages.popular')}
                    </div>
                )}
                <h3 className="text-2xl font-bold text-center mb-2 logo-font">{name}</h3>
                <div className="text-center mb-6">
                    <span className="text-5xl font-black tracking-tighter text-white">{fmtE(pkg.price)}</span>
                    <span className="text-2xl text-gray-400 line-through ml-2">{fmtE(pkg.priceOld)}</span>
                    {isPopular && <p className="text-xs text-gray-400 mt-1">{t('packages.vat_info')}</p>}
                </div>
                <ul className="space-y-3 mb-6 text-gray-300 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                
                <p className="text-sm text-gray-400 mb-8 p-3 bg-black/20 rounded-lg border border-white/10">{description}</p> 

                <button onClick={() => addToCart(pkg)} className={buttonClasses}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15v4a1 1 0 001 1h12a1 1 0 001-1v-4a1 1 0 00-.293-.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                    {t('packages.select')}
                </button>
            </article>
        </div>
    );
};

const Packages: React.FC<PackagesProps> = ({ t, lang }) => {
    return (
        <section id="packages" className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="logo-font text-4xl font-bold">{t('packages.title')}</h2>
                     <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">{t('packages.subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {PACKAGES.map(pkg => (
                        <PackageCard key={pkg.id} pkg={pkg} t={t} lang={lang} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;