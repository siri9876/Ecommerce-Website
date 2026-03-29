function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

        
        <div>
          <h5 className="text-white font-semibold mb-3">Get to Know Us</h5>
          <p className="hover:text-white cursor-pointer">About Us</p>
          <p className="hover:text-white cursor-pointer">Careers</p>
          <p className="hover:text-white cursor-pointer">Press Releases</p>
          <p className="hover:text-white cursor-pointer">Our Services</p>
        </div>

        
        <div>
          <h5 className="text-white font-semibold mb-3">Connect with Us</h5>
          <p className="hover:text-white cursor-pointer">Facebook</p>
          <p className="hover:text-white cursor-pointer">Twitter</p>
          <p className="hover:text-white cursor-pointer">Instagram</p>
        </div>

        
        <div>
          <h5 className="text-white font-semibold mb-3">Make Money with Us</h5>
          <p className="hover:text-white cursor-pointer">Sell on ShopEase</p>
          <p className="hover:text-white cursor-pointer">Affiliate Program</p>
          <p className="hover:text-white cursor-pointer">Advertise Your Products</p>
          <p className="hover:text-white cursor-pointer">Self Publish</p>
        </div>

       
        <div>
          <h5 className="text-white font-semibold mb-3">Let Us Help You</h5>
          <p className="hover:text-white cursor-pointer">Your Account</p>
          <p className="hover:text-white cursor-pointer">Returns Centre</p>
          <p className="hover:text-white cursor-pointer">100% Purchase Protection</p>
          <p className="hover:text-white cursor-pointer">Help</p>
        </div>

      </div>

      
      <div className="border-t border-gray-700"></div>

      
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        
        <h1 className="text-white text-xl font-bold mb-4 md:mb-0">
          ShopEase
        </h1>

        <div className="flex gap-4 text-sm">
          <p className="border px-3 py-1 rounded hover:text-white cursor-pointer">
            🌐 India
          </p>
          <p className="border px-3 py-1 rounded hover:text-white cursor-pointer">
            English
          </p>
        </div>

      </div>

      
      <div className="bg-gray-800 text-center text-sm py-4">
        <p>© 2026 ShopEase.com, Inc. or its affiliates</p>
      </div>

    </div>
  );
}

export default Footer;