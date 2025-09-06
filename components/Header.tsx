
import React from 'react';
import { Language, LanguageCode } from '../constants';
import { useCart } from '../context/CartContext';

interface HeaderProps {
    t: (key: keyof Language) => string;
    setLang: (lang: LanguageCode) => void;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ t, setLang, onCartClick }) => {
    const { cartCount } = useCart();

    const navLinks = [
        { href: '#packages', key: 'nav.packages' },
        { href: '#products', key: 'nav.products' },
        { href: '#event-planner', key: 'nav.planner' },
        { href: '#mascots', key: 'nav.mascots' },
        { href: '#media', key: 'nav.media' },
        { href: '#permits', key: 'nav.permits' },
        { href: '#contact', key: 'nav.contact' },
    ] as const;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className="sticky top-0 z-30 bg-[rgba(5,2,15,0.7)] backdrop-blur-md border-b border-[rgba(158,0,255,0.3)] shadow-[0_0_20px_rgba(158,0,255,0.2)]">
            <div className="container mx-auto px-4 flex items-center gap-4 py-2.5">
                <a className="logo-font flex items-center gap-2.5 font-black text-white text-xl" href="#hero">
                    <img src="/images/LOGO.jpg" alt="Party Accessoires Verhuur logo" className="h-12 rounded-md shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300" />
                    <span className="sr-only">AKCESORIA IMPREZOWE VERHUUR</span>
                </a>
                <div className="hidden md:flex items-center gap-2 flex-wrap mx-auto">
                    {navLinks.map(link => (
                        <a 
                            key={link.key} 
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="btn-ghost-nav !text-sm !font-semibold !border-none !bg-transparent hover:!bg-[rgba(158,0,255,0.2)] transition-colors"
                        >
                            {t(link.key)}
                        </a>
                    ))}
                    <button 
                        onClick={onCartClick} 
                        className="relative btn-ghost-nav !text-sm !font-semibold !border-none !bg-transparent hover:!bg-[rgba(158,0,255,0.2)] transition-colors flex items-center gap-1"
                    >
                        <svg className="w-4 h-4 mr-1 text-[#d8b4fe]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                        {t('nav.cart')} 
                        <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-[#05020f] text-[#d8b4fe] border border-[rgba(158,0,255,0.5)]">
                            {cartCount}
                        </span>
                    </button>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                    <button onClick={() => setLang('pl')} className="btn-ghost !p-2 !rounded-lg text-sm">🇵🇱</button>
                    <button onClick={() => setLang('nl')} className="btn-ghost !p-2 !rounded-lg text-sm">🇳🇱</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
