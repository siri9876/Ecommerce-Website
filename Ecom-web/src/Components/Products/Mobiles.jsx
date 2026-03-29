import Nav from "../Nav";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import Carousel from "../Carousel/Carousel";

const mobiles = [
 {
    name: "samsung",
    price: "₹30000",
    img:"/sam.jpg"},
  {
    name: "iphone",
    price: "₹60000",
    img:"/iphone.jpg"},
  {
    name: "vivo",
    price: "₹35000",
    img:"/vivo.jpg"},
  {
    name: "redme",
    price: "₹20000",
    img:"/redm.jpg"},
 {
    name: "moto",
    price: "₹6000",
    img:"/moto.jpg"},
  {
    name: "realme",
    price: "₹16000",
    img:"/real.jpg"},
  {
    name: "oneplus",
    price: "₹25000",
    img:"/oneplus.jpg"},
  {
    name: "oppo",
    price: "₹18000",
    img:"/oppo.jpg"},
];

function Mobiles() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Nav />
   

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Mobiles
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mobiles.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg">
              <img
                src={item.img}
                className="h-48 w-50 object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-blue-900">{item.price}</p>

                {/* ADD TO CART */}
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>

                {/* BUY NOW */}
                <button
                  onClick={() => {
                    addToCart(item);
                    navigate("/payment");
                  }}
                  className="mt-2 ml-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-500"
                >
                  Buy Now
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

export default Mobiles;