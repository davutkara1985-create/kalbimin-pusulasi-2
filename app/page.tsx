"use client";

import { useState } from "react";

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

        <div className="third-card-title" aria-hidden="true">Rüya Tabirleri</div>
        <div className="third-card-image" aria-hidden="true" />

        <button className="hotspot tarot-hotspot" type="button" aria-label="Tarot" onClick={() => announce("Tarot seçildi")} />
        <button className="hotspot coffee-hotspot" type="button" aria-label="Kahve Falı" onClick={() => announce("Kahve Falı seçildi")} />
        <button className="hotspot dream-hotspot" type="button" aria-label="Rüya Tabirleri" onClick={() => announce("Rüya Tabirleri seçildi")} />

        {message && <div className="exact-toast" role="status">✦ {message}</div>}
      </section>
    </main>
  );
}
