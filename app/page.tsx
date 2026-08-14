"use client";

import { useState } from "react";

const journeys = [
  { step: 1, title: "Tarot", cost: "75 Jeton", image: "/images/tarot-cards.webp" },
  { step: 2, title: "Katina", cost: "75 Jeton", image: "/images/tarot-cards.webp" },
  { step: 3, title: "Kahve Falı", cost: "50 Jeton", image: "/images/coffee-cup.webp" },
  { step: 4, title: "Rüya Tabirleri", cost: "100 Jeton", image: "/images/dream-garden.webp" },
  { step: 5, title: "Doğum Haritası", cost: "250 Jeton", image: "/images/birth-chart.webp" },
  { step: 6, title: "Ruh Eşi", cost: "300 Jeton", image: "/images/soulmate.webp" },
];

const navItems = ["Pusulam", "Keşfet", "Yolculuklarım", "Cüzdan", "Profil"];

export default function Home() {
  const [message, setMessage] = useState("");

  function announce(text: string) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2100);
  }

  return (
    <main className="exact-page">
      <section className="exact-stage" aria-label="Kalbimin Pusulası ana ekranı">
        <img className="exact-reference" src="/images/clean-home-base.png" alt="Kalbimin Pusulası yolculuk haritası" />
        <img className="heart-only" src="/images/heart-only.png" alt="" aria-hidden="true" />

        <nav className="nav-layer" aria-label="Ana menü">
          {navItems.map((label, index) => (
            <button type="button" className={`nav-button nav-button-${index + 1}`} key={label} onClick={() => announce(`${label} açılıyor`)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="streak-button" type="button" aria-label="4 günlük seri" onClick={() => announce("Giriş serisi açılıyor")} />
        <button className="balance-button" type="button" onClick={() => announce("Jeton cüzdanı açılıyor")}><b>125</b> Jeton</button>

        <section className="journeys" aria-label="Yolculuklar">
          {journeys.map((journey) => (
            <button type="button" className={`journey journey-${journey.step}`} key={journey.title} onClick={() => announce(`${journey.title} seçildi`)} aria-label={`${journey.step}. ${journey.title}, ${journey.cost}`}>
              <span className="journey-number">{journey.step}</span>
              <span className="journey-shell">
                <span className="journey-title">{journey.title}</span>
                <span className="journey-image" style={{ backgroundImage: `url(${journey.image})` }} />
                <span className="journey-cost"><i>●</i>{journey.cost}</span>
              </span>
              <span className="journey-finial" aria-hidden="true">◇</span>
            </button>
          ))}
        </section>

        {message && <div className="exact-toast" role="status">✦ {message}</div>}
      </section>
    </main>
  );
}
