# GitHub ve Vercel Güncelleme Rehberi

Bu paket mevcut GitHub + Vercel + Supabase yapısını değiştirmez. Supabase ayarları, ortam değişkenleri ve Vercel proje ayarları korunmalıdır.

## Değiştirilen dosyalar

- `app/page.tsx`
- `app/globals.css`
- `public/images/heart-pulse-source.png`

## GitHub'a yükleme

1. İndirdiğiniz ZIP dosyasını bilgisayarınızda açın.
2. GitHub'da mevcut `kalbimin-pusulasi-2` deponuzu açın.
3. `Add file` düğmesine, ardından `Upload files` seçeneğine basın.
4. ZIP'in içindeki klasörü açın ve klasörün içindeki tüm dosyaları yükleme alanına sürükleyin.
5. GitHub aynı isimli dosyaların güncelleneceğini gösterecektir.
6. Commit açıklamasına `Ana sayfa etkileşim ve kart güncellemesi` yazın.
7. `Commit changes` düğmesine basın.

## Vercel yayını

1. GitHub commit işleminden sonra Vercel otomatik deployment başlatır.
2. Vercel'de `Deployments` bölümüne girin.
3. Yeni deployment tamamlanana kadar bekleyin.
4. Durum `Ready` olduğunda site adresinizi açın.
5. Eski görünüm gelirse tarayıcıda `Ctrl + F5` ile önbelleği yenileyin.

## Kontrol listesi

- Ana sayfa ekranı sağ ve solda boşluk bırakmadan dolduruyor.
- `Pusulam`, `Keşfet`, `Yolculuklarım`, `Cüzdan`, `Profil`, seri ve jeton alanları tıklanabiliyor.
- Kartlar tıklanınca basma ve parlama geri bildirimi görülüyor.
- Kart sırası Tarot, Katina, Kahve Falı, Rüya Tabirleri, Doğum Haritası ve Ruh Eşi şeklinde.
- `Yolculuğa Başla` butonu görünmüyor.
- Kalp özgün görseli korunarak atış efekti yapıyor.

## Önemli

- Vercel veya Supabase ortam değişkenlerini silmeyin.
- Vercel'de yeni proje oluşturmayın; mevcut projeyi kullanın.
- GitHub deposunda `package.json`, `app` ve `public` klasörleri ana dizinde kalmalıdır.
