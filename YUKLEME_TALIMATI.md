# Aşama 5 Düzeltmesi — Minimal Kartlar ve Kesilmesiz Ekran

Bu pakette altı güncel dosya bulunmaktadır:

- `app/page.tsx`
- `app/globals.css`
- `public/images/approved-home-reference.png`
- `public/images/streak-shell.png`
- `public/images/balance-shell.png`
- `public/images/daily-streak-panel.png`

## GitHub'a yükleme

1. Paketteki `app/page.tsx` dosyasını GitHub deponuzdaki aynı dosyanın üzerine yükleyin.
2. Paketteki `app/globals.css` dosyasını GitHub deponuzdaki aynı dosyanın üzerine yükleyin.
3. Paketteki dört PNG dosyasını GitHub deponuzdaki `public/images` klasörüne yükleyin. `approved-home-reference.png` mevcut dosyanın üzerine yazılacak; diğer üç PNG yeni dosyadır.
4. Commit açıklamasına `Aşama 5 düzeltmesi - Minimal kart ve kesilmesiz ekran` yazın.
5. `Commit changes` düğmesine basın.
6. Vercel dağıtımı tamamlandıktan sonra sayfayı `Ctrl + F5` ile yenileyin.

## Düzeltilenler

- Altı kart ve iç görseller daha kısa ve dar hâle getirildi.
- Kart başlıkları, numaralar, sol menü ve üst durum yazıları küçültüldü.
- `Yolculuğunu seç` başlığı küçültüldü.
- Görüntüyü kesen tam ekran `cover` davranışı kaldırıldı.
- Tasarım görüntüsü oranı bozulmadan ve kesilmeden gösterilir; ekranın artan kısmı lacivert tasarım zeminiyle doldurulur.
- 7 günlük giriş serisi paneli bağımsızlaştırılarak belirgin biçimde küçültüldü.
- `4 günlük seri` ve `125 Jeton` kutuları küçültüldü.

Kart sırası, kalp animasyonu, parlak rota ve kart fiyatlarının kaldırılmış olması korunmuştur.
