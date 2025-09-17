
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
              className="relative w-full aspect-[4/3] bg-[#18182a] rounded-xl overflow-hidden ring-1 ring-white/10 cursor-pointer group flex items-center justify-center"
            >
                {product.sale && <span className="absolute right-2.5 top-2.5 bg-black/70 border border-[#ff00ff66] text-[#ffb0ff] px-2 py-1 rounded-full font-extrabold text-xs animate-pulse z-10">SALE</span>}
                <img src={product.img} alt={product.name} className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" style={{background: '#fff', borderRadius: '12px'}} />
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

    // Wyświetlaj 1 na mobile, 2 na tablet, 3 na desktop
    const getVisibleCount = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 640) return 2;
        }
        return 1;
    };
    const [visibleCount, setVisibleCount] = useState(getVisibleCount());
    useEffect(() => {
        const onResize = () => setVisibleCount(getVisibleCount());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Wylicz indeksy produktów do pokazania
    const visibleProducts = [];
    for (let i = -Math.floor((visibleCount-1)/2); i <= Math.floor(visibleCount/2); i++) {
        let idx = (activeIndex + i + PRODUCTS.length) % PRODUCTS.length;
        visibleProducts.push(PRODUCTS[idx]);
    }

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
                    className="flex justify-center items-center gap-6 w-full px-2 md:px-0"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {visibleProducts.map((p, i) => {
                        // Wylicz offset względem aktywnego
                        const offset = (PRODUCTS.indexOf(p) - activeIndex + PRODUCTS.length) % PRODUCTS.length;
                        const isActive = PRODUCTS.indexOf(p) === activeIndex;
                        return (
                            <div
                                key={p.id}
                                className={`transition-all duration-500 ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'} w-full max-w-xs`}
                                style={{ cursor: isActive ? 'default' : 'pointer' }}
                                onClick={() => !isActive && setActiveIndex(PRODUCTS.indexOf(p))}
                            >
                                <ProductCard product={p} onImageClick={setSelectedProduct} isActive={isActive} />
                            </div>
                        );
                    })}
                </div>

                <div className="container mx-auto px-4 flex gap-2 justify-center mt-8">
                    <button onClick={goPrev} className="btn-ghost-nav !text-2xl">◀</button>
                    <button onClick={goNext} className="btn-ghost-nav !text-2xl">▶</button>
                </div>
            </section>

            {selectedProduct && (
                <ProductGalleryModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </>
    );
};

export default Products;
