import Nav from "../Nav";
import Footer from "../Footer";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) =>
      total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );
 
  if (cart.length === 0) {
    return (
      <>
        <Nav />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-2xl font-semibold mb-4">
            Your cart is empty 🛒
          </h2>

          <button
            onClick={() => navigate("/categories")}
            className="bg-blue-900 text-white px-4 py-2 rounded"
          >
            Continue Shopping
          </button>
        </div>
        <Footer />
      </>
    );
  }
  return (
   <>
   <Nav/>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

    
    <div className="lg:col-span-2 space-y-4">
      {cart.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.img}
              className="w-20 h-20 object-cover rounded"
            />

            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>{item.price}</p>

              
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.name)}
                  className="px-2 bg-gray-300 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.name)}
                  className="px-2 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.name)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>

 
    <div className="bg-white p-6 rounded-lg shadow h-fit">
      <h2 className="text-xl font-bold mb-4 text-blue-900">
        Order Summary
      </h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{totalPrice}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>₹0</span>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>₹{totalPrice}</span>
      </div>

      <button
        onClick={() => navigate("/payment")}
        className="mt-5 w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
      >
        Proceed to Checkout
      </button>
    </div>

  </div>
  <Footer/>
</>
  );
}


export default Cart;