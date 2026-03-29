import Nav from "../Nav";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const womens = [
 {
    name: "Anarkali",
    price: "₹500",
    img:"../assets/w1.jpg"},
  {
    name: "Weastren Wear",
    price: "₹1000",
    img:"../assets/w2.jpg"},
  {
    name: "Chudidhar",
    price: "₹800",
    img:"../assets/w3.jpg"},
  {
    name: "Saree",
    price: "₹800",
    img:"../assets/w4.jpg"},
 {
    name: "Panjabi Dress",
    price: "₹1500",
    img:"../assets/w5.jpg"},
  {
    name: "Westren Wear",
    price: "₹3000",
    img:"../assets/w6.jpg"},
  {
    name: "Office Wear",
    price: "₹1000",
    img:"../assets/w7.jpg"},
  {
    name: "Frock",
    price: "₹3000",
    img:"../assets/w8.jpg"},
];

function WomensWear() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Nav />

      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Womens Wear
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {womens.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg shadow-gray-600">
              <img
                src={item.img}
                className="h-48 w-65 rounded object-cover"
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

export default WomensWear;