import React, { useMemo } from 'react';
import { Language, PHONE_WA } from '../constants';

interface BookingCalendarProps {
    t: (key: keyof Language) => string;
    bookingDateTime: { date: string; time: string | null };
    setBookingDateTime: (value: { date: string; time: string | null }) => void;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ t, bookingDateTime, setBookingDateTime }) => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const minDate = today.toISOString().slice(0, 10);
    
    const { date: selectedDate, time: selectedTime } = bookingDateTime;

    const timeSlots = useMemo(() => {
        const slots = [];
        for (let h = 8; h <= 22; h++) {
            slots.push(`${String(h).padStart(2, '0')}:00`);
            slots.push(`${String(h).padStart(2, '0')}:30`);
        }
        return slots;
    }, []);

    const handleTimeSelect = (time: string) => {
        setBookingDateTime({ ...bookingDateTime, time });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBookingDateTime({ date: e.target.value, time: null });
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const waLink = `https://wa.me/${PHONE_WA.replace('+','')}?text=${encodeURIComponent(`Hej, chcę zarezerwować termin: ${selectedDate} ${selectedTime || ''}`)}`;

    return (
        <section id="calendar" className="relative py-16 pattern-bg">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-10">
                    <h2 className="logo-font text-4xl font-bold">{t('calendar.title')}</h2>
                 </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="dateInput" className="block mb-2 font-bold">{t('calendar.date')}</label>
                        <input
                            id="dateInput"
                            type="date"
                            className="input w-full"
                            min={minDate}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        <label className="block mt-4 mb-2 font-bold">{t('calendar.time')}</label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
                            {timeSlots.map(time => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeSelect(time)}
                                    className={`!py-2.5 !px-2 text-center ${selectedTime === time ? 'btn-primary' : 'btn-ghost'}`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="glowing-panel-container sticky top-24">
                            <div className="neon-panel p-4">
                                <h3 className="logo-font text-xl font-bold">{t('calendar.chosen')}</h3>
                                <p className="text-cyan-300 text-lg font-bold my-2 bg-black/20 p-3 rounded-lg border border-white/10">{selectedDate} {selectedTime || '—'}</p>
                                <div className="flex gap-2 flex-wrap">
                                    <a 
                                        href="#contact" 
                                        onClick={(e) => handleNavClick(e, '#contact')} 
                                        className={`btn-primary flex-1 ${!selectedTime ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        aria-disabled={!selectedTime}
                                    >
                                        {t('calendar.confirm')}
                                    </a>
                                    <a 
                                        href={waLink} 
                                        target="_blank" 
                                        rel="noopener" 
                                        className={`btn-ghost flex-1 ${!selectedTime ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        aria-disabled={!selectedTime}
                                    >
                                        {t('calendar.wa')}
                                    </a>
                                </div>
                                <p className="text-[#9fb0d3] mt-2.5 text-sm">{t('calendar.info')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingCalendar;