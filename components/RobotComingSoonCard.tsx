import React from "react";

const RobotComingSoonCard = () => (
  <div className="relative w-full max-w-[420px] rounded-2xl p-4 bg-gradient-to-b from-[#0e0120] to-[#120022] shadow-xl ring-1 ring-white/10">
    {/* RIBBON */}
    <div className="absolute -top-3 left-4 rounded-md px-2 py-1 text-xs font-bold tracking-widest bg-fuchsia-600/90 text-white shadow-md">
      COMING SOON
    </div>
    {/* IMAGE */}
    <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#18182a] ring-1 ring-white/10 flex items-center justify-center">
      <img
        src="/images/Animator zabaw – ROBOT.jpg"
        alt="Animator zabaw – ROBOT (wynajem)"
        className="max-w-full max-h-full object-contain"
        style={{background: '#fff', borderRadius: '12px'}} 
        loading="eager"
      />
    </div>
    {/* TEXT */}
    <div className="mt-4 space-y-2">
      <h3 className="text-xl font-extrabold text-white">
        Animator zabaw – ROBOT (wynajem)
      </h3>
      <p className="text-fuchsia-300 text-lg font-black">180€ / uur</p>
      <p className="text-white/80 text-sm">
        Dostępne od grudnia. Zarezerwuj termin przez WhatsApp.
      </p>
    </div>
    {/* CTA */}
    <div className="mt-4 grid grid-cols-2 gap-3">
      <button
        disabled
        className="rounded-xl py-2 font-semibold text-white bg-white/10 cursor-not-allowed"
        title="Dostępne od grudnia"
      >
        Dodaj do koszyka
      </button>
      <a
        href="https://wa.me/31633387724?text=Rezerwacja%20ROBOT%20Animator%20od%20grudnia"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl py-2 text-center font-semibold text-white bg-fuchsia-600 hover:bg-fuchsia-500"
      >
        WhatsApp
      </a>
    </div>
  </div>
);

export default RobotComingSoonCard;
