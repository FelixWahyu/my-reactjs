import AuthLayout from "../components/Layouts/AuthLayout";
import { getProdukById } from "../api/ProdukApi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Links } from "../components/Elements/Link";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProdukById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <AuthLayout>
      <div className="p-4 max-w-4xl mx-auto">
        <div className="flex items-center mb-4 gap-1">
          <Links to={"/product"} classname="text-sm font-medium text-gray-500">
            Products
          </Links>{" "}
          /<span className="text-gray-800 font-semibold text-sm">{product.title}</span>
        </div>
        <div className="grid border border-gray-300 shadow-md rounded-lg p-6 md:grid-cols-2 gap-8">
          <img src={product.image} className="h-72 mx-auto object-contain" />
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-blue-600 text-xl font-bold mt-4">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
