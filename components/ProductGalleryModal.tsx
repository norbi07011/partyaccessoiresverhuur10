
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductGalleryModalProps {
    product: Product;
    onClose: () => void;
}

const fmtE = (v: number) => '€ ' + (v.toFixed(2)).replace('.', ',');

const ProductGalleryModal: React.FC<ProductGalleryModalProps> = ({ product, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart } = useCart();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % product.gallery.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
    };

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-gallery-title"
        >
            <div 
                className="bg-[#0c1230] border border-[#2a2f55] rounded-2xl w-[95%] max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-2/3 relative bg-black flex items-center justify-center">
                    <img 
                        src={product.gallery[currentIndex]} 
                        alt={`${product.name} - image ${currentIndex + 1}`}
                        className="max-h-[60vh] md:max-h-full object-contain"
                    />
                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80">
                        &#10094;
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80">
                        &#10095;
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {product.gallery.map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-6 flex flex-col">
                    <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl z-10 md:hidden">
                        &times;
                    </button>
                    <h2 id="product-gallery-title" className="logo-font text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="text-[#9fb0d3] flex-grow text-sm leading-relaxed">{product.description}</p>
                    <div className="flex items-end gap-2.5 my-4">
                        {product.priceOld && <span className="text-[#93a0bf] line-through text-lg">{fmtE(product.priceOld)}</span>}
                        <span className="text-[#67e8f9] text-3xl font-black text-shadow-[0_0_18px_rgba(103,232,249,.35)]">
                            {product.price ? fmtE(product.price) : 'w pakiecie'}
                        </span>
                    </div>
                    <button onClick={() => { addToCart(product); onClose(); }} className="btn-primary w-full" disabled={!product.price}>
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductGalleryModal;
