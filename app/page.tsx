"use client";

import { useState } from "react";

const journeys = [
  { title: "Tarot", image: "/images/tarot-cards.webp" },
  { title: "Katina", image: "/images/katina-cards.webp" },
  { title: "Kahve Falı", image: "/images/coffee-cup.webp" },
  { title: "Rüya Tabirleri", image: "/images/dream-garden.webp" },
  { title: "Doğum Haritası", image: "/images/birth-chart.webp" },
  { title: "Ruh Eşi", image: "/images/soulmate.webp" },
];

export default function Home() {
  const [message, setMessage] = useState("");

  function announce(text: string) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2400);
  }

  return (
    <main className="exact-page">
      <section className="exact-stage" aria-label="Kalbimin Pusulası ana ekranı">
        <img
          className="exact-reference"
          src="/images/approved-home-reference.png"
          alt="Kalbimin Pusulası yolculuk haritası"
        />

        <img
          className="heart-beat"
          src="/images/heart-only.png"
          alt=""
          aria-hidden="true"
        />

        <div className="small-nav-label small-nav-label-1" aria-hidden="true">Pusulam</div>
        <div className="small-nav-label small-nav-label-2" aria-hidden="true">Keşfet</div>
        <div className="small-nav-label small-nav-label-3" aria-hidden="true">Yolculuklarım</div>
        <div className="small-nav-label small-nav-label-4" aria-hidden="true">Cüzdan</div>
        <div className="small-nav-label small-nav-label-5" aria-hidden="true">Profil</div>
        <div className="small-status-label streak-label" aria-hidden="true">4 günlük seri</div>
        <div className="small-status-label balance-label" aria-hidden="true">125 Jeton</div>

        <div className="journey-map" aria-label="Yolculuk seçenekleri">
          {journeys.map((journey, index) => (
            <button
              className={`journey-card journey-card-${index + 1}`}
              type="button"
              key={journey.title}
              aria-label={journey.title}
              onClick={() => announce(`${journey.title} seçildi`)}
            >
              <span className="journey-number" aria-hidden="true">{index + 1}</span>
              <span className="journey-surface" aria-hidden="true">
                <span className="journey-title">{journey.title}</span>
                <img className="journey-image" src={journey.image} alt="" />
              </span>
            </button>
          ))}
        </div>

        {message && <div className="exact-toast" role="status">✦ {message}</div>}
      </section>
    </main>
  );
}
