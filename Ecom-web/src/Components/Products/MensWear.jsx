import Nav from "../Nav";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const mens = [
 {
    name: "Leather jacket",
    price: "₹500",
    img:"./src/assets/m1.jpg"},
  {
    name: "Suit",
    price: "₹1000",
    img:"./src/assets/m2.jpg"},
  {
    name: "jacket",
    price: "₹800",
    img:"./src/assets/m3.jpg"},
  {
    name: "White Shirt",
    price: "₹800",
    img:"./src/assets/m4.jpg"},
 {
    name: "Mens Fashion",
    price: "₹1500",
    img:"./src/assets/m5.jpg"},
  {
    name: "Men Casual Wear",
    price: "₹3000",
    img:"./src/assets/m6.jpg"},
  {
    name: "Blue Jacket",
    price: "₹1000",
    img:"./src/assets/m7.jpg"},
  {
    name: "Black Suit",
    price: "₹3000",
    img:"./src/assets/m8.jpg"},
];

function MensWear() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Nav />
      

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Mens Wear
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mens.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg shadow-gray-600">
              <img
                src={item.img}
                className="h-48 w-full rounded object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-blue-900">{item.price}</p>

                
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Add to Cart
                </button>

                
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

export default MensWear;