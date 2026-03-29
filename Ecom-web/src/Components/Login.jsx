import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    
    if (!savedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

  
    if (email !== savedUser.email || password !== savedUser.password) {
      setError("Invalid email or password ❌");
      return;
    }


    setError("");
    alert("Login Successful ✅");
    navigate("/");
  };

  return (
    <>
      <Nav />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>

          <p className="text-center mt-4 text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-700 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;