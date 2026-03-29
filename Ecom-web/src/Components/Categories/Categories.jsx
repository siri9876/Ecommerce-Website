import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Mobiles", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97", path: "/mobiles" },
  { name: "Laptops", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", path: "/laptop" },
  { name: "Mens Wear", img: "https://images.unsplash.com/photo-1520975661595-6453be3f7070", path: "/menswear" },
  { name: "Women Wear", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d", path: "/womenswear" },
  { name: "Kids Wear", img: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4", path: "/kidswear" },
  
];

function Categories() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />

      <div className="px-5 py-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Shop by Categories
        </h1>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold">{cat.name}</h2>

                
                <button
                  onClick={() => navigate(cat.path)}
                  className="mt-3 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Categories;