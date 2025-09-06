
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Language, PRODUCTS, PHONE_WA } from '../constants';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ProductGalleryModal from './ProductGalleryModal';

interface ProductsProps {
    t: (key: keyof Language) => string;
}

const fmtE = (v: number) => '€ ' + (v.toFixed(2)).replace('.', ',');

const ProductCard: React.FC<{ product: Product; onImageClick: (product: Product) => void; isActive: boolean }> = ({ product, onImageClick, isActive }) => {
    const { addToCart } = useCart();
    const waLink = `https://wa.me/${PHONE_WA.replace('+','')}?text=${encodeURIComponent(`Hej, chcę zarezerwować: ${product.product || product.name} – data: [____]`)}`;

    const cardClasses = [
        'neon-panel p-3.5 w-full h-full flex flex-col transition-shadow duration-500',
        isActive ? 'shadow-[0_0_35px_rgba(0,229,255,0.5)] border-[var(--c-neon-cyan)]' : ''
    ].join(' ');

    return (
        <article className={cardClasses}>
            <div
              onClick={() => onImageClick(product)}
              className="relative w-full aspect-[4/3] bg-black rounded-xl overflow-hidden ring-1 ring-white/10 cursor-pointer group"
            >
                {product.sale && <span className="absolute right-2.5 top-2.5 bg-black/70 border border-[#ff00ff66] text-[#ffb0ff] px-2 py-1 rounded-full font-extrabold text-xs animate-pulse z-10">SALE</span>}
                <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-lg" style={{textShadow: '0 0 10px #fff'}}>Zobacz galerię</span>
                </div>
            </div>
            <div className="mt-3 font-extrabold text-lg text-white">{product.name}</div>
            <div className="flex-grow"></div>
            <div className="flex items-end gap-2.5 mt-3">
                {product.priceOld && <span className="text-[#93a0bf] line-through text-base">{fmtE(product.priceOld)}</span>}
                <span className="text-2xl font-black" style={{color: 'var(--c-neon-cyan)', textShadow: '0 0 10px var(--c-neon-cyan)'}}>
                    {product.price ? fmtE(product.price) : 'w pakiecie'}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mt-3">
                <button onClick={() => addToCart(product)} className="btn-primary" disabled={!product.price}>Dodaj do koszyka</button>
                <a href={waLink} target="_blank" rel="noopener" className="btn-ghost">WhatsApp</a>
            </div>
        </article>
    );
}


const Products: React.FC<ProductsProps> = ({ t }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [activeIndex, setActiveIndex] = useState(Math.floor(PRODUCTS.length / 2));
    
    const goNext = useCallback(() => {
        setActiveIndex(i => (i + 1) % PRODUCTS.length);
    }, []);

    const goPrev = useCallback(() => {
        setActiveIndex(i => (i - 1 + PRODUCTS.length) % PRODUCTS.length);
    }, []);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
        touchEndX.current = e.targetTouches[0].clientX; 
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };
    const handleTouchEnd = () => {
        const threshold = 50;
        if (touchStartX.current - touchEndX.current > threshold) {
            goNext();
        } else if (touchEndX.current - touchStartX.current > threshold) {
            goPrev();
        }
    };

    return (
        <>
            <section id="products" className="relative py-16 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                      <h2 className="logo-font text-3xl font-bold">{t('products.title')}</h2>
                      <p className="text-[#c8bfff] mt-2">{t('products.hint')}</p>
                    </div>
                </div>

                <div 
                    className="coverflow-container"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="coverflow-track">
                        {PRODUCTS.map((p, index) => {
                            const offset = index - activeIndex;
                            const isFar = Math.abs(offset) > 2;
                            
                            const style: React.CSSProperties = {
                                transform: `rotateY(${offset * 25}deg) scale(${1 - Math.abs(offset) * 0.1}) translateX(${offset * 20}%) translateZ(${Math.abs(offset) * -80}px)`,
                                opacity: isFar ? 0 : (1 - Math.abs(offset) * 0.3),
                                zIndex: PRODUCTS.length - Math.abs(offset),
                                pointerEvents: offset === 0 ? 'auto' : 'all',
                            };

                            return (
                                <div 
                                    key={p.id}
                                    className="coverflow-item"
                                    style={style}
                                    onClick={() => offset !== 0 && setActiveIndex(index)}
                                >
                                    <ProductCard product={p} onImageClick={setSelectedProduct} isActive={index === activeIndex} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="container mx-auto px-4 flex gap-2 justify-center mt-8">
                    <button onClick={goPrev} className="btn-ghost-nav !text-2xl">◀</button>
                    <button onClick={goNext} className="btn-ghost-nav !text-2xl">▶</button>
                </div>
            </section>

            {selectedProduct && (
                <ProductGalleryModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}

            <style>{`
                .coverflow-container {
                    position: relative;
                    width: 100%;
                    height: 480px; 
                    perspective: 1200px;
                }
                .coverflow-track {
                    transform-style: preserve-3d;
                    height: 100%;
                }
                .coverflow-item {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 90%;
                    max-width: 320px;
                    height: 100%;
                    transition: transform 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.45s ease-out;
                    cursor: pointer;
                }
                .coverflow-item:not([style*="pointer-events: auto;"]) {
                     cursor: pointer;
                }
                .coverflow-item[style*="pointer-events: auto;"] {
                     cursor: default;
                }

                 @media (min-width: 768px) {
                    .coverflow-item {
                         max-width: 360px;
                    }
                     .coverflow-container {
                        height: 520px;
                    }
                 }
            `}</style>
        </>
    );
};

export default Products;
