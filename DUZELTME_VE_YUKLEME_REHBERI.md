# Düzeltme ve Yükleme Rehberi

Bu sürüm önceki stabil proje paketi üzerinden yeniden hazırlanmıştır. Önceki hatalı güncellemenin dosyalarını kullanmayın.

## Güncellenen dosyalar

- `app/page.tsx`
- `app/globals.css`
- `public/images/clean-home-base.png`
- `public/images/heart-only.png`

## GitHub'a yükleme

1. GitHub'daki mevcut projenizi açın.
2. `app` klasörüne girin.
3. `page.tsx` ve `globals.css` dosyalarını bu paketteki sürümlerle değiştirin.
4. `public/images` klasörüne girin.
5. `clean-home-base.png` ve `heart-only.png` dosyalarını yükleyin.
6. Commit açıklamasına `Ana sayfa temiz kart ve kalp düzeltmesi` yazın.
7. Commit işlemini tamamlayın.

## Vercel kontrolü

1. GitHub commit işleminden sonra Vercel'in otomatik deployment başlatmasını bekleyin.
2. Deployment durumu `Ready` olunca siteyi açın.
3. Eski dosyalar görünürse `Ctrl + F5` ile önbelleği yenileyin.

## Beklenen sonuç

- Önceki üç karta ait eski jeton yazıları görünmez.
- Harita üzerinde yalnızca altı yeni kart bulunur.
- Kalbin çevresinde dairesel hareket olmaz; yalnızca kalp biçimi atar.
- Menü metinlerinin arkasında düz dikdörtgen blok görünmez.
- `Yolculuğa Başla` görünmez.
- Sayfa sağ ve solda boşluk bırakmadan ekranı kaplar.
