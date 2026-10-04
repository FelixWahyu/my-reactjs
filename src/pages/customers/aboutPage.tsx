import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Users,
  Award,
  Star,
  Target,
  Compass,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Heart,
  Quote,
  Layers,
  Leaf,
} from "lucide-react";
import MainLayout from "../../components/Layouts/MainLayout";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    {
      label: "Pelanggan Puas",
      value: "50.000+",
      desc: "Tersebar di seluruh Indonesia",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50 border-blue-100",
    },
    {
      label: "Koleksi Fashion",
      value: "1.500+",
      desc: "Model trendi & selalu up-to-date",
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50 border-indigo-100",
    },
    {
      label: "Kepuasan Pembeli",
      value: "99.4%",
      desc: "Rating rata-rata bintang 4.9/5",
      icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
      bgColor: "bg-amber-50 border-amber-100",
    },
    {
      label: "Material Premium",
      value: "100%",
      desc: "Lolos uji standar kenyamanan",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50 border-emerald-100",
    },
  ];

  const values = [
    {
      title: "Kualitas Premium Terjamin",
      desc: "Kami hanya memilih material serat kain terbaik yang lembut di kulit, adem, menyerap keringat, dan tidak mudah luntur meski dicuci berulang kali.",
      icon: <Award className="w-6 h-6 text-blue-600" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Desain Trendi & Timeless",
      desc: "Perpaduan harmonis antara tren fashion terkini dan gaya klasik yang fleksibel untuk berbagai acara, dari kasual sehari-hari hingga formal.",
      icon: <Sparkles className="w-6 h-6 text-purple-600" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Harga Jujur & Bersahabat",
      desc: "Kami percaya fashion berkualitas tidak harus mahal. Dapatkan standar busana butik dengan harga yang sangat ramah di kantong Anda.",
      icon: <ShoppingBag className="w-6 h-6 text-emerald-600" />,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Pengiriman Cepat & Terlindungi",
      desc: "Didukung mitra logistik terpercaya dengan packing rapi, aman, dan garansi sampai tepat waktu di alamat tujuan Anda di seluruh Nusantara.",
      icon: <Truck className="w-6 h-6 text-orange-600" />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Garansi 7 Hari Penukaran",
      desc: "Ukuran tidak pas atau ada kendala produk? Kami menyediakan kebijakan penukaran barang yang mudah dan transparan demi kenyamanan belanja Anda.",
      icon: <RotateCcw className="w-6 h-6 text-rose-600" />,
      color: "bg-rose-100 text-rose-600",
    },
    {
      title: "Pelayanan Ramah 24/7",
      desc: "Tim Customer Support kami siap mendengarkan, menjawab pertanyaan, dan memberikan rekomendasi outfit terbaik kapan pun Anda butuhkan.",
      icon: <Headphones className="w-6 h-6 text-cyan-600" />,
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Awal Perjalanan",
      desc: "TokoBaju lahir dari toko busana lokal sederhana dengan fokus menghadirkan kaos katun combed premium.",
    },
    {
      year: "2023",
      title: "Ekspansi Lini Koleksi",
      desc: "Merambah ke busana formal, kemeja kasual, outerwear, dan menjangkau lebih dari 20.000 pelanggan aktif.",
    },
    {
      year: "2025",
      title: "Digitalisasi Platform",
      desc: "Meluncurkan platform e-commerce modern dengan pengalaman belanja interaktif dan katalog real-time.",
    },
    {
      year: "2026",
      title: "Eco-Fashion & Komunitas",
      desc: "Memulai inisiatif produksi ramah lingkungan dan membangun komunitas fashion terbesar di Indonesia.",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Rian Pratama",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      bio: "Berpengalaman lebih dari 8 tahun di industri tekstil dan e-commerce fashion Asia Tenggara.",
    },
    {
      name: "Siti Rahmania",
      role: "Lead Fashion Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
      bio: "Alumni desain busana dengan sentuhan estetika kontemporer yang menggabungkan tradisi & modernitas.",
    },
    {
      name: "Dimas Anggara",
      role: "Production & Quality Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      bio: "Memastikan setiap jahitan, pola, dan material melewati standar uji kualitas yang ketat.",
    },
    {
      name: "Clara Amanda",
      role: "Head of Customer Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
      bio: "Berdedikasi untuk menciptakan interaksi dan pengalaman belanja yang berkesan bagi setiap pembeli.",
    },
  ];

  const testimonials = [
    {
      name: "Nadia Saraswati",
      role: "Fashion Enthusiast, Jakarta",
      comment: "Kualitas kainnya juara banget! Baju-baju dari TokoBaju adem banget dipakai seharian dan potongannya pas di badan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Budi Santoso",
      role: "Creative Director, Bandung",
      comment: "Desainnya minimalis tapi tetap terlihat mewah. Sangat cocok untuk meeting kerja maupun nongkrong santai saat akhir pekan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Alisa Putri",
      role: "Content Creator, Surabaya",
      comment: "Proses pengirimannya cepat dan CS nya sangat responsif saat konsultasi ukuran. TokoBaju sekarang jadi langganan outfit utamaku!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "Apa yang membuat produk TokoBaju berbeda dari toko lain?",
      answer:
        "Kami fokus pada kombinasi material serat alami berkualitas tinggi, pola potongan presisi yang nyaman untuk postur orang Indonesia, serta harga yang transparan tanpa mark-up berlebihan.",
    },
    {
      question: "Bagaimana jika pakaian yang saya beli salah ukuran?",
      answer:
        "Jangan khawatir! Kami menyediakan garansi penukaran ukuran dalam waktu 7 hari sejak produk diterima. Cukup hubungi tim layanan pelanggan kami untuk panduan proses retur yang mudah.",
    },
    {
      question: "Berapa lama estimasi pengiriman pesanan?",
      answer:
        "Untuk area Jabodetabek berkisar antara 1-2 hari kerja. Untuk wilayah luar kota di Pulau Jawa 2-3 hari kerja, dan luar Pulau Jawa berkisar 3-5 hari kerja tergantung ekspedisi yang dipilih.",
    },
    {
      question: "Apakah TokoBaju menerima pesanan grosir atau seragam komunitas?",
      answer:
        "Ya, kami menerima pemesanan khusus untuk seragam kantor, event komunitas, dan pesanan jumlah besar dengan penawaran harga khusus. Silakan hubungi tim kami melalui email atau nomor WhatsApp resmi.",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-white text-gray-800">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white py-16 lg:py-24 border-b border-gray-100">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/40 via-purple-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Cerita & Filosofi TokoBaju</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Mewujudkan Gaya Terbaik & <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Kenyamanan Sejati</span> untuk Semua
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                Kami percaya bahwa fashion bukan sekadar pakaian yang Anda kenakan, melainkan cara Anda mengekspresikan karakter, merayakan keunikan, dan tampil percaya diri di setiap detik berharga.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/katalog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Jelajahi Koleksi</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <a
                  href="#story"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all"
                >
                  Pelajari Kisah Kami
                </a>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border ${stat.bgColor} shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="p-2.5 rounded-xl bg-white w-fit shadow-xs mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-800 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== OUR STORY SECTION ===================== */}
        <section id="story" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Imagery Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
                    alt="Store & Craftsmanship"
                    className="w-full h-96 sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                      Sejak 2021
                    </span>
                    <h3 className="text-xl font-bold mt-2">Dibuat dengan Ketelitian & Cinta</h3>
                    <p className="text-xs text-gray-200 mt-1">Standar jahitan rapi dengan bahan berstandar ekspor</p>
                  </div>
                </div>

                {/* Floating Badge Card */}
                <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 max-w-xs flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 rounded-xl text-emerald-600 shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">100% Sustainable</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Komitmen proses produksi ramah lingkungan & etis.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-blue-600" />
                <span>Kisah TokoBaju</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Berawal dari Sebuah Mimpi Menghadirkan Busana Berkualitas untuk Semua
              </h2>

              <p className="text-gray-600 leading-relaxed">
                TokoBaju didirikan dengan tujuan sederhana namun bermakna: mematahkan anggapan bahwa pakaian berkualitas tinggi dan modis selalu harus dibanderol dengan harga selangit.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Melalui riset mendalam terhadap pemilihan kain berkualitas, rancangan ergonomis yang nyaman, serta kontrol mutu yang ketat, kami berupaya memberikan pengalaman berpakaian yang meningkatkan rasa percaya diri Anda setiap hari.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Kain Berkualitas Tinggi & Lembut",
                  "Jahitan Kuat & Presisi",
                  "Gaya Modern & Fleksibel",
                  "Transparansi Harga & Layanan",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== VISION & MISSION ===================== */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
                <Compass className="w-3.5 h-3.5" />
                <span>Panduan Langkah Kami</span>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Visi & Misi Kami
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3">
                Prinsip fundamental yang mengarahkan setiap inovasi desain, pelayanan, dan komitmen kami kepada Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Visi */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200/80 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full -z-0" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Utama</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Menjadi pelopor brand fashion terdepan di Indonesia yang dipercaya karena kenyamanan, keindahan desain, dan kontribusi nyata dalam memajukan industri busana lokal yang berkelanjutan.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-blue-600 text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>Inovasi Tanpa Batas</span>
                </div>
              </div>

              {/* Misi */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200/80 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full -z-0" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-indigo-500/20">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
                  <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        1
                      </div>
                      <span>Menghadirkan koleksi busana dengan bahan premium dan jahitan presisi standar butik.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        2
                      </div>
                      <span>Menetapkan harga yang adil dan terjangkau bagi seluruh kalangan masyarakat.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        3
                      </div>
                      <span>Memberikan pelayanan belanja digital yang cepat, ramah, aman, dan memuaskan.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-indigo-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Komitmen Penuh Kualitas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CORE VALUES ===================== */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Nilai & Keunggulan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Mengapa Memilih TokoBaju?
            </h2>
            <p className="text-gray-600 text-base mt-4 leading-relaxed">
              Enam pilar utama yang selalu kami pegang teguh demi memberikan pengalaman terbaik bagi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${val.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== TIMELINE / MILESTONES ===================== */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                Jejak Perjalanan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                Milestone & Transformasi
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mt-3">
                Langkah demi langkah evolusi TokoBaju dari sebuah ide hingga menjadi brand fashion terpercaya.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/60 hover:border-blue-500 transition-all duration-300 group"
                >
                  <div className="text-3xl font-extrabold text-blue-400 mb-2 group-hover:translate-x-1 transition-transform">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== OUR TEAM ===================== */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Orang di Balik Layar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Tim Berdedikasi Kami
            </h2>
            <p className="text-gray-600 text-base mt-3">
              Kreativitas, keahlian, dan semangat tinggi untuk menghadirkan pengalaman fashion terbaik bagi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white bg-blue-600/90 px-2.5 py-1 rounded-md">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-2.5">{member.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className="py-20 bg-blue-50/50 border-y border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mb-3">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Ulasan Pelanggan</span>
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Apa Kata Mereka Tentang Kami?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testi, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200/80 flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <Quote className="w-8 h-8 text-blue-200 absolute top-5 right-5" />
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                      "{testi.comment}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={testi.avatar}
                      alt={testi.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{testi.name}</h4>
                      <p className="text-xs text-gray-500">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ SECTION ===================== */}
        <section className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Punya pertanyaan seputar produk atau layanan kami? Temukan jawabannya di sini.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-2" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl shadow-blue-600/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider text-blue-100">
                Temukan Koleksi Favoritmu
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                Siap Tampil Beda & Percaya Diri Hari Ini?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Jelajahi ratusan koleksi busana trendi dengan penawaran spesial dan potongan harga menarik khusus untuk Anda.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Link
                to="/katalog"
                className="px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 text-center shadow-lg transition-all transform hover:scale-105 active:scale-95"
              >
                Lihat Katalog Produk
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
