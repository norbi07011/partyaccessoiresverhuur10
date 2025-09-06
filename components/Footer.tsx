import React from 'react';
import { Language, PHONE_WA } from '../constants';

interface FooterProps {
    t: (key: keyof Language) => string;
}

const socialLinks = [
    { 
        href: 'https://www.facebook.com/share/19QpQroYra/', 
        title: 'Facebook', 
        icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
    },
    { 
        href: 'https://www.tiktok.com/@partijwestland?_t=ZG-8yvXXlSqtkW&_r=1', 
        title: 'TikTok',
        icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.24-2.95-2.2-6.87-0.04-9.88 1.4-1.96 3.36-3.3 5.7-3.94.04-1.5.02-3.01.01-4.52z"/></svg>
    },
    { 
        href: 'https://partijvandeduivel.pixieset.com/sporwaikl/', 
        title: 'Portfolio',
        icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 14a5 5 0 100-10 5 5 0 000 10z"/><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/></svg>
    },
    { 
        href: `https://wa.me/${PHONE_WA.replace('+', '')}?text=${encodeURIComponent('Hej, chcę zarezerwować atrakcję…')}`, 
        title: 'WhatsApp', 
        icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    }
];

const Footer: React.FC<FooterProps> = ({ t }) => {
    const currentYear = new Date().getFullYear();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="bg-[#0a0e19] border-t border-[#1d2546] py-8 text-white">
            <div className="container mx-auto px-4 text-left">
                <div className="pa-glow-frame pa-glow-frame--wide">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-2">
                                <div className="logo-font flex items-center gap-2.5 font-black text-white text-xl mb-4">
                                    <img src="/images/LOGO.jpg" alt="Party Accessoires Verhuur logo" className="h-9 rounded-md" />
                                    PARTY ACCESSOIRES VERHUUR
                                </div>
                                <p className="text-gray-400 max-w-sm mb-4">
                                   {t('hero.sub')}
                                </p>
                                 <div className="flex items-center gap-4">
                                    {socialLinks.map(link => (
                                        <a key={link.title} href={link.href} title={link.title} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                            <span className="sr-only">{link.title}</span>
                                            <div className="w-6 h-6">{link.icon}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
        
                            
                            <div>
                                <h4 className="font-bold text-lg mb-4 logo-font">{t('footer.links.title')}</h4>
                                <ul className="space-y-2">
                                    <li><a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.packages')}</a></li>
                                    <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.products')}</a></li>
                                    <li><a href="#event-planner" onClick={(e) => handleNavClick(e, '#event-planner')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.planner')}</a></li>
                                    <li><a href="#mascots" onClick={(e) => handleNavClick(e, '#mascots')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.mascots')}</a></li>
                                    <li><a href="#media" onClick={(e) => handleNavClick(e, '#media')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.media')}</a></li>
                                    <li><a href="#permits" onClick={(e) => handleNavClick(e, '#permits')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.permits')}</a></li>
                                    <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('faq.title')}</a></li>
                                    <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">{t('nav.contact')}</a></li>
                                </ul>
                            </div>
                            
                            
                            <div>
                                <h4 className="font-bold text-lg mb-4 logo-font">{t('footer.contact.title')}</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>Tel: <a href="tel:+31642512086" className="hover:text-cyan-400 transition-colors">+31 642512086</a></li>
                                    <li>Tel: <a href="tel:+31633387724" className="hover:text-cyan-400 transition-colors">+31 6 33387724</a></li>
                                    <li>Email: <a href="mailto:partyaccessoires79@gmail.com" className="hover:text-cyan-400 transition-colors break-all">partyaccessoires79@gmail.com</a></li>
                                     <li>Web: <a href="https://partyaccessoiresverhuur.com/" target="_blank" rel="noopener" className="hover:text-cyan-400 transition-colors">partyaccessoiresverhuur.com</a></li>
                                </ul>
                            </div>
                        </div>
        
                        <div id="disclaimer" className="mt-8 pt-8 border-t border-white/10">
                            <div className="pa-glow-frame pa-glow-frame--small-padding">
                                <div className="text-sm">
                                    <strong className="font-bold block mb-1 text-yellow-300">{t('footer.disclaimer.title')}</strong>
                                    <p className="text-yellow-200">{t('footer.disclaimer.text')}</p>
                                </div>
                            </div>
                        </div>
        
                        <div className="mt-8 text-center text-sm text-gray-500">
                            <p className="mb-2">
                                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-cyan-400 transition-colors">{t('footer.terms')}</a> • 
                                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-cyan-400 transition-colors mx-2">{t('footer.privacy')}</a> • 
                                <a href="#disclaimer" onClick={(e) => handleNavClick(e, '#disclaimer')} className="hover:text-cyan-400 transition-colors">{t('footer.returns')}</a>
                            </p>
                            <p>© {currentYear} Party Accessoires Verhuur — Westland / Den Haag. VAT NL — standard 21%.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;