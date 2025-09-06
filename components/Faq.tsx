import React from 'react';
import { Language } from '../constants';

interface FaqProps {
    t: (key: keyof Language) => string;
}

const FaqItem: React.FC<{ summary: string; children: React.ReactNode }> = ({ summary, children }) => (
    <details className="bg-[#0e1430] border border-[#2a2f55] rounded-xl px-3 py-2.5">
        <summary className="font-black cursor-pointer">{summary}</summary>
        <p className="pt-2 text-[#9fb0d3]">{children}</p>
    </details>
);

const Faq: React.FC<FaqProps> = ({ t }) => {
    const faqItems = [
        { q: 'Jak działa rezerwacja?', a: 'Dodaj produkty do koszyka, a następnie wyślij do nas zamówienie przez WhatsApp. Skontaktujemy się z Tobą, aby potwierdzić szczegóły.' },
        { q: 'Czy dowozicie sprzęt?', a: 'Tak. Westland / Den Haag i okolice. Dowóz + montaż na miejscu.' },
        { q: 'Jak działa płatność?', a: 'Po potwierdzeniu rezerwacji przez WhatsApp, otrzymasz od nas fakturę z danymi do przelewu lub prośbę o płatność Tikkie.' },
        { q: 'Co, jeśli pada deszcz?', a: 'Dostosujemy termin lub zaproponujemy alternatywę — skontaktuj się z nami.' }
    ];

    return (
        <section id="faq" className="relative py-16 pattern-bg">
            <div className="container mx-auto px-4">
                <h2 className="logo-font text-3xl font-bold mb-4">{t('faq.title')}</h2>
                <div className="space-y-2.5 max-w-3xl">
                    {faqItems.map((item, index) => (
                        <FaqItem key={index} summary={item.q}>
                            {item.a}
                        </FaqItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;