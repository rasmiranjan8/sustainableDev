import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-soil p-4 flex justify-between items-center fixed top-0 w-full z-50"
      style={{
        backdropFilter: "blur(50%)",
        boxShadow: "0px 0px 30px rgba(227, 228, 237, 0.37)",
        border: "1.5px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <div className="text-white text-2xl font-bold">Environment Friendly</div>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-white hover:text-black hover:bg-green-light hover:rounded-md"
        >
          Home
        </Link>
        <Link
          to="/signup"
          className="text-white hover:text-black hover:bg-green-light hover:rounded-md"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="text-white hover:text-black hover:bg-green-light hover:rounded-md"
        >
          Login
        </Link>
        <Link
          to="/products"
          className="text-white hover:text-black hover:bg-green-light hover:rounded-md"
        >
          Products
        </Link>
        <Link
          to="/contactUs"
          className="text-white hover:text-black hover:bg-green-light hover:rounded-md"
        >
          Contact Us
        </Link>
        <Link
          to="/blogs"
          className="text-white hover:text-black hover:bg-green-light hover:rounded-md"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
