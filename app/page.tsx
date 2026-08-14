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

const navigation = ["Pusulam", "Keşfet", "Yolculuklarım", "Cüzdan", "Profil"];

export default function Home() {
  const [message, setMessage] = useState("");

  function announce(text: string) {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2200);
  }

  return (
    <main className="exact-page">
      <section className="exact-stage" aria-label="Kalbimin Pusulası ana ekranı">
        <img className="exact-reference" src="/images/approved-home-reference.png" alt="Kalbimin Pusulası yolculuk haritası" />
        <div className="start-button-cover" aria-hidden="true" />
        <img className="heart-pulse" src="/images/heart-pulse-source.png" alt="Kalp pusulası" />

        <nav className="navigation-hotspots" aria-label="Ana menü">
          {navigation.map((label, index) => (
            <button type="button" className={`nav-hotspot nav-${index + 1}`} key={label} aria-label={label} onClick={() => announce(`${label} açılıyor`)} />
          ))}
        </nav>

        <div className="smaller-label label-pusulam">Pusulam</div>
        <div className="smaller-label label-kesfet">Keşfet</div>
        <div className="smaller-label label-yolculuklarim">Yolculuklarım</div>
        <div className="smaller-label label-cuzdan">Cüzdan</div>
        <div className="smaller-label label-profil">Profil</div>

        <button className="balance-hotspot" type="button" aria-label="125 Jeton" onClick={() => announce("Jeton cüzdanı açılıyor")}>
          <span><b>125</b> Jeton</span>
        </button>
        <button className="streak-hotspot" type="button" aria-label="4 günlük seri" onClick={() => announce("Giriş serisi açılıyor")} />

        <section className="journey-layer" aria-label="Yolculuklar">
          {journeys.map((journey) => (
            <button type="button" className={`journey-card journey-${journey.step}`} key={journey.title} onClick={() => announce(`${journey.title} seçildi`)} aria-label={`${journey.step}. ${journey.title}, ${journey.cost}`}>
              <span className="journey-number">{journey.step}</span>
              <span className="journey-title">{journey.title}</span>
              <span className="journey-image" style={{ backgroundImage: `url(${journey.image})` }} />
              <span className="journey-cost"><i>●</i>{journey.cost}</span>
            </button>
          ))}
        </section>

        {message && <div className="exact-toast" role="status">✦ {message}</div>}
      </section>
    </main>
  );
}
