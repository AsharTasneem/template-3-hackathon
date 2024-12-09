import Image from "next/image";
import shoe1 from "../../public/shoe1.png"
import shoe2 from "../../public/shoe2.png"
export default function Display() {
    const products = [
      {
        id: 1,
        name: "Nike Air Max Pulse",
        price: "₹ 13,995",
        category: "Women's Shoes",
        image: shoe1,
      },
      {
        id: 2,
        name: "Nike Air Max Pulse",
        price: "₹ 13,995",
        category: "Men's Shoes",
        image:  shoe1,
      },
      {
        id: 3,
        name: "Nike Air Max 97 SE",
        price: "₹ 16,995",
        category: "Men's Shoes",
        image:  shoe2,
      },
    ];
  
    return (
      <div className="w-[95%] m-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-6 roboto">
          <h2 className="text-xl font-bold">Best of Air Max</h2>
          <button className="text-sm font-medium text-gray-600 hover:underline">
            Shop
          </button>
        </div>
  
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={441}
                height={441}
              />
              {/* Product Info */}
              <div className="roboto font-[500] text-sm grid grid-cols-2">
                <h3>{product.name}</h3>
                <p className="text-gray-500 font-[400] text-right">{product.category}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  