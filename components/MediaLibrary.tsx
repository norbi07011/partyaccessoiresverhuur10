
import React, { useState } from 'react';
import { Language, MEDIA_DATA, PHONE_WA } from '../constants';
import { MediaItem } from '../types';

interface MediaLibraryProps {
    t: (key: keyof Language) => string;
}

type Tab = 'videos' | 'photos' | 'embeds';
type LangFilter = 'ALL' | 'PL' | 'NL';

const MediaLibrary: React.FC<MediaLibraryProps> = ({ t }) => {
    const [activeTab, setActiveTab] = useState<Tab>('videos');
    const [activeLang, setActiveLang] = useState<LangFilter>('ALL');
    const [lightboxImage, setLightboxImage] = useState<{ src: string, alt: string } | null>(null);

    const filteredMedia = MEDIA_DATA[activeTab].filter(item => 
        activeLang === 'ALL' || item.lang === activeLang
    );
    
    const renderMediaItem = (item: MediaItem, index: number) => {
        const waLink = `https://wa.me/${PHONE_WA.replace('+','')}?text=${encodeURIComponent(`Hej, chcę zarezerwować: ${item.product || item.title} – data: [____]`)}`;

        if (activeTab === 'videos') {
            return (
                <figure key={index} className="card">
                    <div className="thumb">
                        <video 
                            muted 
                            playsInline 
                            preload="metadata" 
                            controls 
                            src={item.src} 
                            poster={item.poster || `/images/${item.title.replace(/ /g, '_')}.jpg`} 
                            className="media-item" 
                        />
                        <span className="badge-lang">{item.lang}</span>
                    </div>
                    <figcaption className="meta">
                        <div className="title">{item.title}</div>
                        <div className="product">Produkt: {item.product}</div>
                    </figcaption>
                    <a href={waLink} className="cta" target="_blank" rel="noopener">Zarezerwuj tę atrakcję</a>
                </figure>
            );
        }
        if (activeTab === 'photos') {
            return (
                <figure key={index} className="card">
                    <div className="thumb"><img loading="lazy" src={item.src} alt={item.alt} className="media-item" /></div>
                    <figcaption className="meta"><div className="title">{item.alt}</div></figcaption>
                    <button onClick={() => setLightboxImage({ src: item.src!, alt: item.alt! })} className="cta">Powiększ</button>
                    <a href={waLink} className="cta" target="_blank" rel="noopener">Zarezerwuj tę atrakcję</a>
                </figure>
            );
        }
        if (activeTab === 'embeds') {
            return (
                <figure key={index} className="card">
                    <div className="thumb">
                         <iframe 
                            src={item.url} 
                            title={item.title}
                            loading="lazy" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen 
                            className="w-full h-full border-0"
                         ></iframe>
                        <span className="badge-lang">{item.lang}</span>
                    </div>
                    <figcaption className="meta"><div className="title">{item.title}</div></figcaption>
                    <a href={item.url} className="cta" target="_blank" rel="noopener">Zobacz w serwisie</a>
                </figure>
            );
        }
        return null;
    };
    
    return (
        <>
            <section id="media" className="relative py-16 pattern-bg">
                <div className="container mx-auto px-4">
                    <header className="relative z-10">
                        <h2 className="logo-font text-3xl font-bold">{t('media.title')}</h2>
                        <p className="text-[#9fb0d3]">{t('media.subtitle')}</p>
                        <div className="flex items-center gap-2 flex-wrap my-4">
                            <button onClick={() => setActiveTab('videos')} className={`tab ${activeTab === 'videos' ? 'is-active' : ''}`}>{t('media.tab.videos')}</button>
                            <button onClick={() => setActiveTab('photos')} className={`tab ${activeTab === 'photos' ? 'is-active' : ''}`}>{t('media.tab.photos')}</button>
                            <button onClick={() => setActiveTab('embeds')} className={`tab ${activeTab === 'embeds' ? 'is-active' : ''}`}>{t('media.tab.embeds')}</button>
                            <div className="flex-1"></div>
                            <button onClick={() => setActiveLang('ALL')} className={`chip ${activeLang === 'ALL' ? 'is-active' : ''}`}>ALL</button>
                            <button onClick={() => setActiveLang('PL')} className={`chip ${activeLang === 'PL' ? 'is-active' : ''}`}>🇵🇱 PL</button>
                            <button onClick={() => setActiveLang('NL')} className={`chip ${activeLang === 'NL' ? 'is-active' : ''}`}>🇳🇱 NL</button>
                        </div>
                    </header>
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2.5">
                       {filteredMedia.map(renderMediaItem)}
                    </div>
                </div>
            </section>

            {lightboxImage && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]" onClick={() => setLightboxImage(null)}>
                    <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 border border-[#4360ff] bg-[#0e1330] text-[#a8bdff] rounded-lg px-2.5 py-1.5 z-10">✕</button>
                    <figure className="max-w-[92vw] max-h-[90vh] p-4" onClick={e => e.stopPropagation()}>
                        <img src={lightboxImage.src} alt={lightboxImage.alt} className="max-w-full max-h-[80vh] rounded-xl shadow-[0_0_40px_rgba(71,164,255,.4)] card-media" />
                        <figcaption className="text-[#c9d6ff] mt-2.5 text-center">{lightboxImage.alt}</figcaption>
                    </figure>
                </div>
            )}
            <style>{`
                .card { background: #0e1326; border: 1px solid rgba(108,122,255,.25); border-radius: 18px; overflow: hidden; box-shadow: 0 0 32px rgba(69,95,255,.18); display: flex; flex-direction: column; }
                .thumb { position: relative; aspect-ratio: 16/9; background: #000; }
                .media-item { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; }
                .badge-lang { position: absolute; left: 10px; top: 10px; background: rgba(0,0,0,.55); border: 1px solid rgba(124,233,255,.5); color: #7ce9ff; display: inline-flex; align-items: center; gap: 6px; padding: 4px 8px; border-radius: 999px; font-weight: 800; font-size: 12px;}
                .meta { padding: 10px 12px 0; }
                .meta .title { font-weight: 800; }
                .meta .product { font-size: .86rem; color: #9fb0d3; }
                .cta { margin: 10px 12px 12px; display: inline-flex; justify-content: center; align-items: center; padding: 10px 12px; border-radius: 12px; font-weight: 900; background: linear-gradient(90deg,#6d28d9,#22d3ee); color: #071017; border: 1px solid rgba(255,255,255,.12); }
                .tab { background: linear-gradient(90deg,#7038ea 0%,#23d3ee 100%); color: #061018; border: none; border-radius: 999px; padding: 10px 16px; font-weight: 800; box-shadow: 0 0 24px rgba(35,211,238,.25); opacity: .6; transition: .2s transform,.2s opacity; }
                .tab.is-active { opacity: 1; transform: translateY(-1px); }
                .chip { background: rgba(103,232,249,.1); color: #7ce9ff; border: 1px solid rgba(103,232,249,.35); border-radius: 999px; padding: 8px 12px; font-weight: 800; }
                .chip.is-active { background: rgba(103,232,249,.2); }
            `}</style>
        </>
    );
};

export default MediaLibrary;
