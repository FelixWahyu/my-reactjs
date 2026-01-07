import MainLayout from "../components/Layouts/MainLayout";

const products = [
  {
    id: 1,
    name: "Kaos Hitam Polos",
    price: 150000,
    image: "https://images.unsplash.com/photo-1654570818480-54524bf0186b?q=80&w=478&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
  {
    id: 2,
    name: "Celana Panjang",
    price: 120000,
    image: "https://images.unsplash.com/photo-1718252540558-7b383b52642e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
  {
    id: 3,
    name: "Kaos Polos",
    price: 100000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
  {
    id: 4,
    name: "Kemeja Kotak-kotak",
    price: 180000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, ducimus neque ad sunt laudantium aut!",
  },
];

const KatalogProduct = () => {
  return (
    <MainLayout>
      <div className="py-20 px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Katalog Produk</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit quibusdam beatae.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4">
          {products.map((item) => (
            <div key={item.id} className="border border-gray-300 shadow-md rounded-lg p-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
              <div className="w-full h-64 overflow-hidden rounded-md">
                <img src={item.image} alt={item.name} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="my-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 my-1">{item.description}</p>
                <h2 className="font-medium">Rp {item.price.toLocaleString("id-ID")}</h2>
              </div>
              <div>
                <button className="px-4 py-2 w-full bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 cursor-pointer">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default KatalogProduct;
