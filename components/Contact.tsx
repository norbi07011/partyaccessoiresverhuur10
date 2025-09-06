import React, { FormEvent, useState, useEffect } from 'react';
import { Language, PHONE_WA } from '../constants';

interface ContactProps {
    t: (key: keyof Language) => string;
    bookingDateTime: { date: string; time: string | null };
}

const Contact: React.FC<ContactProps> = ({ t, bookingDateTime }) => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (bookingDateTime.date && bookingDateTime.time) {
            setMessage(`Chcę zarezerwować termin: ${bookingDateTime.date} o godzinie ${bookingDateTime.time}.\n\n`);
        }
    }, [bookingDateTime]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        
        const bookingInfo = (bookingDateTime.date && bookingDateTime.time) 
            ? `Termin: ${bookingDateTime.date} ${bookingDateTime.time}\n---\n`
            : '';

        const text = `Hej! [Formularz Rezerwacji]\n${bookingInfo}Imię: ${name}\nEmail: ${email}\nTel: ${phone}\nWiadomość: ${message}`;
        const waLink = `https://wa.me/${PHONE_WA.replace('+','')}?text=${encodeURIComponent(text)}`;
        window.open(waLink, '_blank');
    };

    const waContactLink = `https://wa.me/${PHONE_WA.replace('+','')}?text=${encodeURIComponent('Hej, chcę zarezerwować atrakcję…')}`;


    return (
        <section id="contact" className="relative py-16 pattern-bg">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="logo-font text-3xl font-bold mb-4">{t('contact.title')}</h2>
                </div>
                <div className="max-w-2xl mx-auto mt-8">
                    {bookingDateTime.date && bookingDateTime.time && (
                         <div className="neon-panel !border-cyan-400/50 bg-cyan-500/10 text-cyan-200 text-center p-3 mb-4 rounded-lg">
                            <strong className="block">{t('calendar.chosen')}:</strong>
                            <span className="font-bold text-lg">{bookingDateTime.date} {bookingDateTime.time}</span>
                        </div>
                    )}
                    <div className="glowing-panel-container">
                        <div className="neon-panel p-6">
                            <form onSubmit={handleSubmit} className="grid gap-2.5">
                                <input className="input" name="name" placeholder="Imię i nazwisko" required />
                                <input className="input" type="email" name="email" placeholder="E-mail" required />
                                <input className="input" type="tel" name="phone" placeholder="Telefon" required />
                                <textarea 
                                    className="input" 
                                    name="msg" 
                                    rows={5} 
                                    placeholder="Wiadomość"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <button className="btn-primary" type="submit">{t('contact.send')}</button>
                                <a href={waContactLink} className="btn-ghost" target="_blank" rel="noopener">{t('contact.wa')}</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;