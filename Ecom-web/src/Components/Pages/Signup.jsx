import Nav from "../Nav";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom"; // ✅ ADD

function Signup() {

  const navigate = useNavigate(); // ✅ ADD

 const handleSignup = () => {
  const user = {
    name: document.querySelector('input[type="text"]').value,
    email: document.querySelector('input[type="email"]').value,
    password: document.querySelector('input[type="password"]').value,
  };

  localStorage.setItem("user", JSON.stringify(user)); // ✅ SAVE USER

  alert("Signup Successful ✅");
  navigate("/login");
};
  return (
    <>
      <Nav />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-2 border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>

          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-700 cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;