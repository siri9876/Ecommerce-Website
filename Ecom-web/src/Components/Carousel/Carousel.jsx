import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom"; 

function Carousel() {

  const navigate = useNavigate();

  return (
    <div className="mt-5 px-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
      >

        
        <SwiperSlide>
          <div className="relative">
            <img
              src="../assets/car-1.jpg"
              className="w-full h-80 object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

            <div className="absolute top-10 left-10 text-white">
              <h1 className="text-5xl font-bold">Shop Smart.Live Better</h1><br/>
              <p>Shop live here and enjoy the deals</p><br />
              
              
              <button
                onClick={() => navigate("/categories")}
                className="mt-2 bg-green-500 px-4 py-2 rounded"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="relative">
            <img
              src="../assets/car-2.jpg"
              className="w-full h-80 object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

            <div className="absolute top-10 left-10 text-white">
              <h1 className="text-5xl font-bold">Shop Smart.Live Better</h1><br/>
              <p>Shop live here and enjoy the deals</p><br />
              
              <button
                onClick={() => navigate("/categories")}
                className="mt-2 bg-green-500 px-4 py-2 rounded"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="relative">
            <img
              src="../assets/car-3.jpg"
              className="w-full h-80 object-cover rounded-lg"
            />

            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

            <div className="absolute top-10 left-10 text-white">
              <h1 className="text-5xl font-bold">Shop Smart.Live Better</h1><br/>
              <p>Shop live here and enjoy the deals</p><br />
              
              <button
                onClick={() => navigate("/categories")}
                className="mt-2 bg-green-500 px-4 py-2 rounded"
              >
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Carousel;