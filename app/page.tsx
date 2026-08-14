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

        <div className="third-card-title" aria-hidden="true">Rüya Tabirleri</div>
        <div className="third-card-image" aria-hidden="true" />

        <button className="hotspot start-hotspot" type="button" aria-label="Yolculuğa Başla" onClick={() => announce("Yolculuğun başlıyor")} />
        <button className="hotspot tarot-hotspot" type="button" aria-label="Tarot, 75 Jeton" onClick={() => announce("Tarot seçildi")} />
        <button className="hotspot coffee-hotspot" type="button" aria-label="Kahve Falı, 50 Jeton" onClick={() => announce("Kahve Falı seçildi")} />
        <button className="hotspot dream-hotspot" type="button" aria-label="Rüya Tabirleri, 100 Jeton" onClick={() => announce("Rüya Tabirleri seçildi")} />

        {message && <div className="exact-toast" role="status">✦ {message}</div>}
      </section>
    </main>
  );
}
