# 🎬 Netflix Clone

Modern React TypeScript ile Netflix benzeri streaming platformu, giriş sayfası, film kategorileri ve responsive tasarım ile tam özellikli web uygulaması.

![Netflix Clone](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Özellikler

- **🎭 Netflix Benzeri Giriş Sayfası** - Oturum açmadan önceki landing page
- **📺 Film/Dizi Kategorileri** - Aksiyon, Komedi, Drama filmleri
- **🎨 Modern UI/UX** - Netflix'in kırmızı teması ve koyu arka plan
- **📱 Responsive Tasarım** - Mobil ve masaüstü uyumlu
- **⚡ İnteraktif Kartlar** - Hover efektleri ile film kartları
- **🔍 Film Detay Sayfaları** - Detaylı film bilgileri
- **🎯 Kategori Bazlı Gözatma** - Farklı film türleri

## 🛠 Teknolojiler

- **React 18** - Modern React hooks ve functional components
- **TypeScript** - Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Sayfa yönlendirme
- **Lucide React** - Modern ikonlar
- **Framer Motion** - Smooth animasyonlar

## 📦 Kurulum

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/furkan-selcuk/netflix-clone.git
cd netflix-clone
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Projeyi başlatın:**
```bash
npm start
```

4. **Tarayıcıda açın:**
```
http://localhost:3000
```

## 🎯 Kullanım

### Giriş Sayfası
- E-posta ve şifre ile giriş yapın
- "Beni hatırla" seçeneği
- Kayıt ol / Giriş yap geçişi

### Ana Sayfa
- Netflix benzeri hero bölümü
- Film/dizi satırları
- Hover efektleri ile interaktif kartlar

### Gözatma Sayfası
- Kategorilere ayrılmış filmler
- Kaydırılabilir satırlar
- Film detaylarına erişim

### Film Detay Sayfası
- Detaylı film bilgileri
- Oyuncu ve yönetmen bilgileri
- Oynat, beğen, paylaş butonları

## 📁 Proje Yapısı

```
netflix-clone/
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── Navbar.tsx      # Navigasyon çubuğu
│   │   ├── Hero.tsx        # Ana sayfa hero bölümü
│   │   ├── MovieCard.tsx   # Film kartı bileşeni
│   │   └── MovieRow.tsx    # Film satırı bileşeni
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Login.tsx       # Giriş sayfası
│   │   ├── Home.tsx        # Ana sayfa
│   │   ├── Browse.tsx      # Gözatma sayfası
│   │   └── MovieDetail.tsx # Film detay sayfası
│   ├── App.tsx             # Ana uygulama bileşeni
│   ├── index.tsx           # Uygulama giriş noktası
│   └── index.css           # Global stiller
├── public/                 # Statik dosyalar
├── tailwind.config.js      # Tailwind yapılandırması
└── package.json            # Proje bağımlılıkları
```

## 🎨 Tasarım Özellikleri

- **Netflix Kırmızısı**: #E50914
- **Koyu Tema**: #141414 arka plan
- **Responsive Grid**: Mobil-first yaklaşım
- **Smooth Animasyonlar**: Hover efektleri
- **Modern Typography**: Inter font ailesi

## 🔧 Geliştirme

### Yeni Özellik Ekleme
1. Yeni bileşen oluşturun (`src/components/`)
2. Sayfa ekleyin (`src/pages/`)
3. Route'u ekleyin (`src/App.tsx`)
4. Stil ekleyin (Tailwind CSS)

### Stil Değişiklikleri
- Tailwind CSS sınıfları kullanın
- `tailwind.config.js`'de özel renkler tanımlayın
- `src/index.css`'de global stiller ekleyin

## 🚀 Gelecek Özellikler

- [ ] Backend entegrasyonu
- [ ] Kullanıcı kimlik doğrulama
- [ ] Video player
- [ ] Arama fonksiyonu
- [ ] Favori listesi
- [ ] Daha fazla animasyon

## 📸 Ekran Görüntüleri

### Giriş Sayfası
![Login Page](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Netflix+Login+Page)

### Ana Sayfa
![Home Page](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Netflix+Home+Page)

### Film Detay
![Movie Detail](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Movie+Detail+Page)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

**Furkan Selçuk**
- GitHub: [@furkan-selcuk](https://github.com/furkan-selcuk)

## 🙏 Teşekkürler

- [Netflix](https://netflix.com) - Tasarım ilhamı
- [React](https://reactjs.org) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com) - CSS framework
- [Unsplash](https://unsplash.com) - Görseller

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
