import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function Nav() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const suggestions = [
    "mobiles",
    "laptops",
    "mens wear",
    "womens wear",
    "kids wear",
  ];

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  
  const handleSearch = (valueParam) => {
    const value = (valueParam || search).toLowerCase().trim();

    if (value.includes("mobile")) navigate("/mobiles");
    else if (value.includes("laptop")) navigate("/laptop");
    else if (value.includes("mens")) navigate("/menswear");
    else if (value.includes("women")) navigate("/womenswear");
    else if (value.includes("kids")) navigate("/kidswear");
    else alert("No category found");

    setSearch("");
  };

  return (
    <>
      <div className="flex items-center justify-between p-3 bg-blue-950 text-white">

       
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

      
        <h1 className="text-2xl font-bold">ShopEase</h1>

       
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>

          <div className="relative">
            <NavLink to="/cart">Cart</NavLink>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>

          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign up</NavLink>
        </div>

        
        <div className="relative w-40 sm:w-60 md:w-72 ml-3">
          <div className="bg-white rounded flex">
            <input
              className="text-black px-2 flex-1 outline-none"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button
              className="px-3 bg-blue-800 text-white"
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>

          
          {search && (
            <div className="absolute w-full bg-white text-black shadow-lg rounded mt-1 z-50">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSearch(item)}
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No results</div>
              )}
            </div>
          )}
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white flex flex-col p-4 space-y-4">

          <NavLink 
            to="/" 
            onClick={() => setMenuOpen(false)}
            className="border-b pb-2"
          >
            Home
          </NavLink>

          <NavLink 
            to="/categories" 
            onClick={() => setMenuOpen(false)}
            className="border-b pb-2"
          >
            Categories
          </NavLink>

          <NavLink 
            to="/cart" 
            onClick={() => setMenuOpen(false)}
            className="border-b pb-2 flex justify-between items-center"
          >
            Cart
            {totalItems > 0 && (
              <span className="bg-red-500 text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </NavLink>

          <NavLink 
            to="/login" 
            onClick={() => setMenuOpen(false)}
            className="border-b pb-2"
          >
            Login
          </NavLink>

          <NavLink 
            to="/signup" 
            onClick={() => setMenuOpen(false)}
          >
            Sign up
          </NavLink>
        </div>
      )}

      <div className="bg-blue-900 text-white overflow-x-auto">
        <div className="flex justify-between px-4 overflow-x-auto">
          <NavLink to="/mobiles">Mobiles</NavLink>
          <NavLink to="/laptop">Laptops</NavLink>
          <NavLink to="/menswear">Mens Wear</NavLink>
          <NavLink to="/womenswear">Women Wear</NavLink>
          <NavLink to="/kidswear">Kids Wear</NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;