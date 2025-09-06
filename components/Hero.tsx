
import React from 'react';
import { Language } from '../constants';

interface HeroProps {
    t: (key: keyof Language) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header id="hero" className="relative py-20 px-0 overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="mb-8 lg:mb-0">
                    <div className="flex items-center gap-3 mb-4">
                        <img 
                            src="/images/LOGO.jpg" 
                            alt="Party Accessoires Verhuur logo" 
                            className="h-20 w-auto rounded-md shadow-xl shadow-purple-500/30 border border-purple-500/20" 
                        />
                    </div>
                    <h1 
                       className="logo-font text-2xl md:text-3xl text-white leading-snug my-6 max-w-xl"
                    >
                        {t('hero.sub')}
                    </h1>

                     <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg font-bold mb-8">
                        <a href="tel:+31642512086" className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.364 6.364l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                           </svg>
                           +31 642512086
                        </a>
                        <a href="tel:+31633387724" className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.42 3.62 2.42 5.82-0.01 4.55-3.71 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.99-.15.17-.3.19-.56.07-.26-.12-1.1-.4-2.09-1.29-.77-.69-1.29-1.55-1.44-1.82-.15-.26-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.5c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.56.12.17 1.75 2.67 4.24 3.72 2.49 1.05 2.49.7 2.94.68.45-.02 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18c-.07-.1-.25-.16-.5-.28z"/>
                           </svg>
                           +31 6 33387724
                        </a>
                    </div>
                    
                    <div className="flex gap-4 flex-wrap my-5">
                        <a 
                            href="#calendar" 
                            onClick={(e) => handleNavClick(e, '#calendar')} 
                            className="btn-primary !font-bold !px-6 !py-3.5 !bg-gradient-to-r !from-violet-500 !to-cyan-400 !shadow-[0_4px_30px_rgba(34,211,238,0.5)] hover:!shadow-[0_8px_40px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105 transform"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                            {t('cta.bookNow')}
                        </a>
                        <a 
                            href="https://wa.me/31633387724?text=Hej,%20chcę%20zarezerwować%20atrakcje" 
                            target="_blank" 
                            rel="noopener" 
                            className="btn-ghost !font-bold !px-6 !py-3.5 hover:!bg-purple-500/20 hover:!border-purple-300 transition-all duration-300"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.364 6.364l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                            {t('cta.whatsappNow')}
                        </a>
                    </div>
                </div>
                <div className="relative h-[420px] neon-panel p-2">
                    <img src="/images/IMPREZOWE NAMIOT LED,.jpg" alt="Namiot imprezowy LED" className="w-full h-full object-cover rounded-lg" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-lg pointer-events-none"></div>
                    <h2 className="absolute bottom-4 left-4 text-white text-xl logo-font pointer-events-none">Namiot imprezowy LED</h2>
                </div>
            </div>
        </header>
    );
};

export default Hero;
