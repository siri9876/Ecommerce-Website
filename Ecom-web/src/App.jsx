import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories/Categories";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Payment from "./Components/Payment";
import Mobiles from "./Components/Products/Mobiles";
import Laptops from "./Components/Products/Laptops"
import MensWear from "./Components/Products/MensWear";
import WomensWear from "./Components/Products/WomensWear";
import KidsWear from "./Components/Products/KidsWear"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/mobiles" element={<Mobiles/>}/>
      <Route path="/laptop" element={<Laptops/>}></Route>
      <Route path="/menswear" element={<MensWear/>}></Route>
      <Route path="/womenswear" element={<WomensWear/>}></Route>
      <Route path="/kidswear" element={<KidsWear/>}></Route>
    </Routes>
  );
}

export default App;