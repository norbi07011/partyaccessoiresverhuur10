
import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { CartItem, Product, Package } from '../types';

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Product | Package, qty?: number) => void;
    removeFromCart: (itemId: string) => void;
    updateQty: (itemId: string, delta: number) => void;
    cartCount: number;
    totals: { sub: number; vat: number; tot: number };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

const VAT_RATE = 0.21;

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
        } catch (error) {
            console.error("Failed to load cart from localStorage", error);
            setCart([]);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Failed to save cart to localStorage", error);
        }
    }, [cart]);

    const addToCart = useCallback((item: Product | Package, qty: number = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(i => i.id === item.id);
            if (existingItem) {
                return prevCart.map(i =>
                    i.id === item.id ? { ...i, qty: i.qty + qty } : i
                );
            }
            return [...prevCart, { id: item.id, name: item.name, price: item.price, img: item.img, qty }];
        });
    }, []);

    const removeFromCart = useCallback((itemId: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    }, []);



    const updateQty = useCallback((itemId: string, delta: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId
                    ? { ...item, qty: Math.max(1, item.qty + delta) }
                    : item
            ).filter(item => item.qty > 0)
        );
    }, []);

    const cartCount = cart.reduce((count, item) => count + item.qty, 0);

    const totals = React.useMemo(() => {
        const sub = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const vat = sub * VAT_RATE;
        const tot = sub + vat;
        return { sub, vat, tot };
    }, [cart]);

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        cartCount,
        totals
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
