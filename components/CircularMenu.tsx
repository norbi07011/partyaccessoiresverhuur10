import React from 'react';
import { PHONE_WA, Language } from '../constants';

const CircularMenu: React.FC<{ t: (key: keyof Language) => string }> = ({ t }) => {
    const socialLinks = [
        { 
            href: 'https://www.facebook.com/share/19QpQroYra/', 
            title: 'Facebook', 
            icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
            brandColor: '#1877F2'
        },
        { 
            href: 'https://www.tiktok.com/@partijwestland?_t=ZG-8yvXXlSqtkW&_r=1', 
            title: 'TikTok',
            icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525 0.02C13.835 0 15.135 0.01 16.435 0.02C16.515 1.55 17.065 3.11 18.185 4.19C19.305 5.3 20.885 5.81 22.425 5.98V10.01C20.985 9.96 19.535 9.66 18.225 9.04C17.655 8.78 17.125 8.45 16.605 8.12C16.595 11.04 16.605 13.96 16.585 16.88C16.505 18.28 15.965 19.67 15.155 20.82C13.845 22.74 11.575 23.99 9.245 24.03C6.815 24.08 4.405 23.09 2.875 21.07C0.635 18.12 0.675 14.19 2.835 11.2C4.235 9.24 6.195 7.9 8.535 7.26C8.575 5.76 8.555 4.25 8.545 2.74C8.545 2.52 8.545 2.3 8.555 2.08C8.555 1.63 8.575 1.18 8.615 0.73C9.435 0.28 10.325 0 11.265 0C11.665 0 12.085 0.01 12.525 0.02Z"/></svg>,
            brandColor: 'var(--c-neon-cyan)'
        },
        { 
            href: 'https://partijvandeduivel.pixieset.com/sporwaikl/', 
            title: 'Portfolio',
            icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h3l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 14a5 5 0 100-10 5 5 0 000 10z"/><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/></svg>,
            brandColor: 'var(--c-neon-pink)'
        },
        { 
            href: `https://wa.me/${PHONE_WA.replace('+', '')}?text=${encodeURIComponent('Hej, chcę zarezerwować atrakcję…')}`, 
            title: 'WhatsApp', 
            icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>,
            brandColor: '#25D366'
        }
    ];

    return (
        <>
            <div className="fixed bottom-4 right-4 z-30" aria-label="Media społecznościowe">
                <div className="pa-glow-frame pa-glow-frame--pill">
                    <div>
                        <div className="flex flex-col gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-pill-item"
                                    style={{ '--brand-color': link.brandColor } as React.CSSProperties}
                                    title={link.title}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .social-pill-item {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    color: #a8bdff; /* Default subtle color */
                    background-color: transparent;
                    transition: all 0.2s ease-in-out;
                }

                .social-pill-item:hover {
                    transform: scale(1.1);
                    color: var(--brand-color);
                    box-shadow: 0 0 12px 2px var(--brand-color);
                }
            `}</style>
        </>
    );
};

export default CircularMenu;