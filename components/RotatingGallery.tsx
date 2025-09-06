import React from 'react';
import { Language, MASCOTS } from '../constants';

interface RotatingGalleryProps {
    t: (key: keyof Language) => string;
}

const RotatingGallery: React.FC<RotatingGalleryProps> = ({ t }) => {
    const displayMascots = MASCOTS.slice(0, 8);
    const [rotationDegree, setRotationDegree] = React.useState<number | null>(null);
    const [isAutoRotating, setIsAutoRotating] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState<number>(0);
    const [imgError, setImgError] = React.useState<Record<number, boolean>>({});

    const rotateLeft = () => {
        setIsAutoRotating(false);
        setRotationDegree(prev => {
            const next = (prev === null ? -45 : prev - 45);
            return ((next % 360) + 360) % 360 * (next < 0 ? -1 : 1);
        });
    };

    const rotateRight = () => {
        setIsAutoRotating(false);
        setRotationDegree(prev => {
            const next = (prev === null ? 45 : prev + 45);
            return ((next % 360) + 360) % 360;
        });
    };

    const resetRotation = () => {
        setRotationDegree(null);
        setIsAutoRotating(true);
    };

    return (
        <>
            <section id="mascots" className="gallery-section">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <div className="mascot-title-container">
                        <h2 className="logo-font text-4xl md:text-5xl font-bold text-center mb-16 relative z-20 mascot-title">{t('mascots.title')}</h2>
                    </div>
                    <div className="gallery-controls">
                        <button 
                            className="gallery-control-btn left" 
                            onClick={rotateLeft} 
                            aria-label="Przewiń w lewo"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className={`gallery-box ${isAutoRotating ? 'auto-rotate' : ''}`} 
                             style={rotationDegree !== null ? { transform: `rotateY(${rotationDegree}deg)` } : undefined}>
                            {displayMascots.map((mascot, index) => {
                                const isActive = index === currentIndex;
                                return (
                                    <span key={index} style={{ '--i': index + 1 } as React.CSSProperties}>
                                        <div
                                            className={"mascot-card" + (isActive ? ' is-active' : '')}
                                            data-active={isActive ? 'true' : 'false'}
                                            onMouseEnter={() => setCurrentIndex(index)}
                                            onFocus={() => setCurrentIndex(index)}
                                            onMouseLeave={() => {}}
                                        >
                                            <div className="card-frame">
                                                {imgError[index] ? (
                                                    <div className="card-fallback">
                                                        <div className="fallback-inner">{mascot.name}</div>
                                                    </div>
                                                ) : (
                                                    <img
                                                        src={mascot.img}
                                                        alt={mascot.alt}
                                                        className="card-media"
                                                        loading="lazy"
                                                        onError={() => setImgError(prev => ({ ...prev, [index]: true }))}
                                                    />
                                                )}
                                            </div>
                                            <div className="mascot-card__footer-overlay">
                                                <h3 className="mascot-card__title">{mascot.name}</h3>
                                                <p className="mascot-card__subtitle">{mascot.subtitle}</p>
                                            </div>
                                        </div>
                                    </span>
                                );
                            })}
                        </div>
                        <button 
                            className="gallery-control-btn right" 
                            onClick={rotateRight} 
                            aria-label="Przewiń w prawo"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    {!isAutoRotating && (
                        <button 
                            className="gallery-reset-btn mt-6" 
                            onClick={resetRotation}
                            aria-label="Resetuj i włącz automatyczną rotację"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1 inline">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Auto-rotacja</span>
                        </button>
                    )}
                </div>
            </section>
            <style>{`
                /* --- Section setup --- */
                .gallery-section {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    padding: 5rem 0 6rem;
                    overflow: hidden;
                    margin-top: 1rem;
                    position: relative;
                    transform-style: preserve-3d;
                    perspective: 3000px;
                }
                .mascot-title-container {
                    width: 100%;
                    position: relative;
                    padding: 1rem 0;
                    margin-bottom: 2rem;
                }
                .mascot-title {
                    text-shadow: 0 0 20px rgba(255, 0, 255, 0.7), 0 0 30px rgba(158, 0, 255, 0.7), 0 0 40px rgba(0, 229, 255, 0.5);
                    position: relative;
                    z-index: 30;
                    padding: 1rem;
                    transform: translateZ(50px);
                }
                .gallery-controls {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    padding: 0 20px;
                    max-width: 90vw;
                    margin: 0 auto;
                    overflow: visible;
                }
                .gallery-control-btn {
                    position: relative;
                    z-index: 10;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(158, 0, 255, 0.2);
                    border: 1px solid rgba(158, 0, 255, 0.5);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 15px rgba(158, 0, 255, 0.3);
                }
                .gallery-control-btn:hover {
                    background: rgba(158, 0, 255, 0.4);
                    box-shadow: 0 0 20px rgba(158, 0, 255, 0.5);
                    transform: scale(1.1);
                }
                .gallery-control-btn.left {
                    margin-right: 20px;
                }
                .gallery-control-btn.right {
                    margin-left: 20px;
                }
                .gallery-reset-btn {
                    background: rgba(158, 0, 255, 0.2);
                    border: 1px solid rgba(158, 0, 255, 0.5);
                    color: white;
                    border-radius: 16px;
                    padding: 8px 16px;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 10px rgba(158, 0, 255, 0.3);
                }
                .gallery-reset-btn:hover {
                    background: rgba(158, 0, 255, 0.4);
                    box-shadow: 0 0 15px rgba(158, 0, 255, 0.5);
                    transform: scale(1.05);
                }
                .gallery-box {
                    position: relative;
                    width: 180px;
                    height: 360px;
                    transform-style: preserve-3d;
                    transition: transform 0.5s ease;
                    margin-top: 32px;
                    perspective: 3000px;
                    overflow: visible;
                }
                .gallery-box.auto-rotate {
                    animation: animate-rotation 90s linear infinite;
                }
                .gallery-box.auto-rotate:hover {
                    animation-play-state: paused;
                }
                @media (min-width: 768px) {
                    .gallery-box {
                        width: 220px;
                        height: 380px;
                        margin-top: 60px;
                        perspective: 3500px;
                    }
                }
                @media (min-width: 1024px) {
                    .gallery-box {
                        width: 240px;
                        height: 420px;
                        perspective: 4000px;
                    }
                }
                @keyframes animate-rotation {
                    0%   { transform: perspective(3000px) rotateY(0deg); }
                    100% { transform: perspective(3000px) rotateY(360deg); }
                }
                .gallery-box span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transform-origin: center;
                    transform-style: preserve-3d;
                    transform: rotateY(calc(var(--i) * 45deg)) translateZ(480px);
                    transition: transform 0.5s ease-in-out;
                }
                @media (max-width: 767px) {
                     .gallery-box span {
                         transform: rotateY(calc(var(--i) * 45deg)) translateZ(340px);
                     }
                }
                @media (max-width: 480px) {
                     .gallery-box span {
                         transform: rotateY(calc(var(--i) * 45deg)) translateZ(300px);
                     }
                }
                .gallery-box span:hover {
                    transform: rotateY(calc(var(--i) * 45deg)) translateZ(480px) scale(1.03);
                }
                @media (max-width: 767px) {
                     .gallery-box span:hover {
                         transform: rotateY(calc(var(--i) * 45deg)) translateZ(340px) scale(1.05);
                     }
                }
                @media (max-width: 480px) {
                     .gallery-box span:hover {
                         transform: rotateY(calc(var(--i) * 45deg)) translateZ(300px) scale(1.05);
                     }
                }
                .mascot-card {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    border: 2px solid var(--c-border);
                    transform-style: preserve-3d;
                    transition: transform 0.5s ease;
                    max-width: 90%;
                    left: 5%;
                    transform-origin: center center;
                }
                .mascot-card[data-active="true"] {
                    --card-dim: 0.05;
                }
                .gallery-box span:hover .mascot-card {
                    transform: rotateY(10deg) rotateX(-5deg);
                    box-shadow: 0 15px 40px rgba(158, 0, 255, 0.4);
                }
                .card-info {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .card-frame {
                    width: 100%;
                    height: 100%;
                    border-radius: 16px;
                    overflow: hidden;
                }
                .card-media {
                    border-radius: 12px;
                    transition: transform 0.5s ease;
                    width: 100%;
                    height: 100%;
                    transform: translateZ(0);
                    display: block;
                }
                .gallery-box span:hover .card-bg {
                    transform: scale(1.05);
                }
                .mascot-card__footer-overlay {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 10;
                    padding: 0.6rem 0.7rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0) 40%);
                    border-bottom-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                    overflow: hidden;
                    text-align: center;
                }
                .mascot-card__title {
                    font-weight: 800;
                    color: #ffffff;
                    font-size: 1.05rem;
                    line-height: 1.05;
                    margin: 0;
                }
                .mascot-card__subtitle {
                    margin-top: 0.25rem;
                    font-size: 0.825rem;
                    color: rgba(255,255,255,0.9);
                    margin: 0;
                }
                .gallery-box span:hover .card-info {
                    transform: translateZ(50px);
                }
                .card-title {
                    font-family: 'Cinzel', serif;
                    font-size: 1.2rem;
                    font-weight: 800;
                    text-shadow: 0 2px 5px rgba(0,0,0,0.8);
                    margin: 0 0 0.3rem 0;
                    line-height: 1.2;
                    text-align: center;
                    word-break: break-word;
                    hyphens: auto;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                @media (min-width: 768px) {
                    .card-title {
                        font-size: 1.3rem;
                    }
                }
                .card-subtitle {
                    font-size: 0.8rem;
                    margin: 0;
                    color: rgba(255,255,255,0.9);
                    text-shadow: 0 1px 3px rgba(0,0,0,0.7);
                    text-align: center;
                    padding-bottom: 0.3rem;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .card-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #2b2b2b 0%, #1f1f1f 100%);
                    color: #fff;
                    font-weight: 700;
                    text-align: center;
                    padding: 1rem;
                }
                .card-fallback .fallback-inner {
                    padding: 1rem;
                }
                @media (min-width: 768px) {
                    .card-subtitle {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </>
    );
};

export default RotatingGallery;