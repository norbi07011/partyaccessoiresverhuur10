
import React, { useState, useEffect } from 'react';
import { L10N, Language, LanguageCode } from './constants';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Packages from './components/Packages';
import EventPlanner from './components/EventPlanner';
import Products from './components/Products';
import RotatingGallery from './components/RotatingGallery';
import MediaLibrary from './components/MediaLibrary';
import Permits from './components/Permits';
import BookingCalendar from './components/BookingCalendar';
import Faq from './components/Faq';
import Reviews from './components/Reviews';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CircularMenu from './components/CircularMenu';
import FloatingCart from './components/FloatingCart';

const AppContent: React.FC = () => {
    const [lang, setLang] = useState<LanguageCode>('pl');
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const initialDate = today.toISOString().slice(0, 10);
    const [bookingDateTime, setBookingDateTime] = useState<{ date: string; time: string | null }>({
        date: initialDate,
        time: null,
    });

    useEffect(() => {
        const savedLang = localStorage.getItem('lang') as LanguageCode | null;
        if (savedLang && (savedLang === 'pl' || savedLang === 'nl')) {
            setLang(savedLang);
        }
    }, []);

    const handleSetLang = (newLang: LanguageCode) => {
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    const t = (key: keyof Language): string => {
        return L10N[lang][key] || L10N['pl'][key];
    };

    return (
        <div className="neon-energy-bg">
            <Header t={t} setLang={handleSetLang} onCartClick={() => setIsCartOpen(true)} />
            <main>
                <Hero t={t} />
                <WhyUs t={t} />
                <hr className="border-none h-px bg-[linear-gradient(90deg,transparent,rgba(255,0,255,0.5),rgba(0,229,255,0.5),transparent)] my-16" />
                <Packages t={t} lang={lang} />
                <hr className="border-none h-px bg-[linear-gradient(90deg,transparent,rgba(255,0,255,0.5),rgba(0,229,255,0.5),transparent)] my-16" />
                <EventPlanner t={t} lang={lang} />
                <hr className="border-none h-px bg-[linear-gradient(90deg,transparent,rgba(255,0,255,0.5),rgba(0,229,255,0.5),transparent)] my-16" />
                <Products t={t} />
                <RotatingGallery t={t} />
                <MediaLibrary t={t} />
                <Permits t={t} />
                <BookingCalendar t={t} bookingDateTime={bookingDateTime} setBookingDateTime={setBookingDateTime} />
                <Faq t={t} />
                <Reviews t={t} />
                <Map t={t} />
                <Contact t={t} bookingDateTime={bookingDateTime} />
            </main>
            <Footer t={t} />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} t={t} />
            <FloatingCart onCartClick={() => setIsCartOpen(true)} />
            <CircularMenu t={t} />
        </div>
    );
};

const App: React.FC = () => (
    <CartProvider>
        <AppContent />
    </CartProvider>
);

export default App;