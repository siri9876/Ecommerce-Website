import Nav from "../Nav";
import Footer from "../Footer";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false); 

  const totalPrice = cart.reduce(
    (total, item) =>
      total + parseInt(item.price.replace("₹", "")) * item.quantity,
    0
  );

  const handlePayment = () => {
    

    setSuccess(true); 
  };

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">

          {!success ? (
            <>
              <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
                Payment
              </h2>

              <input
                type="text"
                placeholder="Card Number"
                className="w-full mb-4 p-2 border rounded"
              />

              <input
                type="text"
                placeholder="Expiry Date"
                className="w-full mb-4 p-2 border rounded"
              />

              <input
                type="text"
                placeholder="CVV"
                className="w-full mb-4 p-2 border rounded"
              />

              <h3 className="text-lg font-semibold mb-4">
                Total: ₹{totalPrice}
              </h3>

              <button
                onClick={handlePayment}
                className="w-full bg-green-600 text-white p-2 rounded"
              >
                Pay Now
              </button>
            </>
          ) : (
            <>
              
              <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
                Payment Successful ✅
              </h2>

              <p className="text-center mb-6">
                Your order has been placed successfully 🎉
              </p>

              <button
                onClick={() => navigate("/")}
                className="w-full bg-blue-900 text-white p-2 rounded"
              >
                Shop More
              </button>
            </>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Payment;