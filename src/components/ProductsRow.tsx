import { Links } from "./Elements/Link";
import { type Product } from "../api/produkApi";

type Props = {
  product: Product;
  index: number;
};

function TableRowProduct({ product, index }: Props) {
  return (
    <tr key={product.id} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition">
      <td className="px-4 py-2 text-center">{index}</td>
      <td className="px-4 py-2">{product.title}</td>
      <td className="px-4 py-2">{product.category}</td>
      <td className="px-4 py-2">Rp{product.price.toLocaleString("id-ID")}</td>
      <td className="px-4 py-2 text-center">
        <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
      </td>
      <td className="px-4 py-2">
        <Links to={`/product/${product.id}`} classname="bg-blue-500 text-white font-semibold px-2 py-0.5 rounded-lg hover:bg-blue-600">
          Details
        </Links>
      </td>
    </tr>
  );
}

export default TableRowProduct;
