import Carousel from "./Carousel/Carousel";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <Carousel />

      
      <h1 className="text-2xl md:text-3xl text-blue-800 ml-6 md:ml-20 mt-6">
        Featured Products
      </h1>

    
      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
       
        <div className="shadow-xl w-full rounded">
          <img
            src="/head.jpg"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-blue-800 text-center mt-2">
            Wireless HeadPhones
          </p>
          <div className="flex justify-center mb-3">
            <button
              onClick={() => navigate("/mobiles")}
              className="bg-blue-900 text-white px-4 py-1 rounded"
            >
              View
            </button>
          </div>
        </div>

        
        <div className="shadow-xl w-full rounded">
          <img
            src="/smart.jpg"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-blue-800 text-center mt-2">
            Smartwatch
          </p>
          <div className="flex justify-center mb-3">
            <button
              onClick={() => navigate("/mobiles")}
              className="bg-blue-900 text-white px-4 py-1 rounded"
            >
              View
            </button>
          </div>
        </div>

        
        <div className="shadow-xl w-full rounded">
          <img
            src="/home.jpg"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-blue-800 text-center mt-2">
            Home and Living
          </p>
          <div className="flex justify-center mb-3">
            <button
              onClick={() => navigate("/categories")}
              className="bg-blue-900 text-white px-4 py-1 rounded"
            >
              View
            </button>
          </div>
        </div>

       
        <div className="shadow-xl w-full rounded">
          <img
             src="/sports.jpg"
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-blue-800 text-center mt-2">
            Sports
          </p>
          <div className="flex justify-center mb-3">
            <button
              onClick={() => navigate("/categories")}
              className="bg-blue-900 text-white px-4 py-1 rounded"
            >
              View
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;