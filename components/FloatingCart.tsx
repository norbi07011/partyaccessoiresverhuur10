import React from 'react';
import { useCart } from '../context/CartContext';

interface FloatingCartProps {
    onCartClick: () => void;
}

const FloatingCart: React.FC<FloatingCartProps> = ({ onCartClick }) => {
    const { cartCount } = useCart();

    return (
        <div className="fixed right-4 top-24 z-30">
            <button 
                onClick={onCartClick} 
                className="relative flex items-center justify-center p-3 rounded-full bg-[rgba(5,2,15,0.9)] backdrop-blur-lg border border-[rgba(158,0,255,0.5)] shadow-[0_0_25px_rgba(158,0,255,0.3)] hover:border-[rgba(158,0,255,0.8)] hover:shadow-[0_0_30px_rgba(158,0,255,0.4)] transition-all duration-300"
            >
                <svg className="w-6 h-6 text-[#d8b4fe]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <span className="absolute -right-2 -top-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-[#05020f] text-[#d8b4fe] border border-[rgba(158,0,255,0.7)]">
                    {cartCount}
                </span>
            </button>
        </div>
    );
};

export default FloatingCart;
