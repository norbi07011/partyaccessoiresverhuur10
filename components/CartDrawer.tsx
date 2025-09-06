import React from 'react';
import { Language, PHONE_WA } from '../constants';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    t: (key: keyof Language) => string;
}

const fmtE = (v: number) => '€ ' + (v.toFixed(2)).replace('.', ',');

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, t }) => {
    const { cart, removeFromCart, updateQty, totals } = useCart();
    
    const waMessageFromCart = () => {
        const lines = cart.map(i => `• ${i.name} × ${i.qty} — ${i.price ? fmtE(i.price * i.qty) : 'w pakiecie'}`).join('%0A');
        const summary = `Podsumowanie:%0A---%0ASubtotal: ${fmtE(totals.sub)}%0AVAT (21%): ${fmtE(totals.vat)}%0A---%0A*Łącznie: ${fmtE(totals.tot)}*`;
        const text = `Hej, chcę złożyć zamówienie:%0A%0A*Produkty:*%0A${lines}%0A%0A${summary}%0A%0AProszę o potwierdzenie i dalsze instrukcje.%0A%0A*Moje dane:*%0AImię i nazwisko: [____]%0AAdres dostawy: [____]%0APreferowana data/godz.: [____]`;
        return `https://wa.me/${PHONE_WA.replace('+','')}?text=${text}`;
    };

    return (
        <aside
            className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0b0f20] border-l border-[#26305a] z-40 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            aria-label="Koszyk"
        >
            <div className="p-3.5 flex items-center justify-between border-b border-[#1d2546]">
                <strong className="text-lg">Twój koszyk</strong>
                <button className="btn-ghost" onClick={onClose}>✕</button>
            </div>
            <div className="p-3.5 overflow-auto flex-1 grid gap-3 content-start">
                {cart.length === 0 ? (
                    <p className="text-[#9fb0d3]">Koszyk jest pusty.</p>
                ) : (
                    cart.map(item => (
                        <div key={item.id} className="grid grid-cols-[72px_1fr_auto] gap-2.5 items-center bg-[#0e1330] border border-[#2a2f55] rounded-xl p-2">
                            <img src={item.img} alt={item.name} className="w-18 h-18 object-contain bg-black rounded-lg" />
                            <div>
                                <div className="font-extrabold">{item.name}</div>
                                <div className="flex gap-1.5 items-center mt-1">
                                    <button onClick={() => updateQty(item.id, -1)} className="qty-btn">−</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => updateQty(item.id, 1)} className="qty-btn">+</button>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-black">{item.price ? fmtE(item.price) : 'pakiet'}</div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-400 text-xs hover:underline mt-1">Usuń</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="border-t border-[#1d2546] p-3 space-y-1.5 text-sm">
                <div className="flex justify-between"><span>Subtotal</span><strong>{fmtE(totals.sub)}</strong></div>
                <div className="flex justify-between"><span>VAT 21%</span><strong>{fmtE(totals.vat)}</strong></div>
                <div className="flex justify-between font-bold text-base"><span>Total</span><strong>{fmtE(totals.tot)}</strong></div>
            </div>
            <div className="p-3 grid gap-2">
                <a href={waMessageFromCart()} target="_blank" rel="noopener" className="btn-primary">Wyślij zamówienie przez WhatsApp</a>
            </div>
             <style>{`
                .qty-btn { width:26px; height:26px; border-radius:8px; border:1px solid #3a437a; background:#0e1433; color:#a8bdff; font-weight:900; }
            `}</style>
        </aside>
    );
};

export default CartDrawer;