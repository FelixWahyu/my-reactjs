function HeroSection() {
  return (
    <div className="min-h-screen flex items-center px-6 lg:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Tampil Percaya Diri
            <span className="block text-blue-500">Dengan Gaya Terbaikmu</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">Temukan koleksi fashion terbaik dengan kualitas premium dan desain modern. Cocok untuk aktivitas harian hingga acara spesial.</p>

          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg font-semibold cursor-pointer shadow-sm">Katalog Produk</button>
            <button className="border border-gray-300 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold cursor-pointer">Tentang Kami</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1596723524688-176682618fd2" className="h-72 w-full object-cover rounded-tr-[50%] rounded-bl-[50%] lg:mb-20" alt="Fashion 1" />
          <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e" className="h-72 w-full object-cover rounded-tl-[50%] rounded-br-[50%] lg:mt-20" alt="Fashion 2" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
