import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {isAuthenticated && (
        <>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
      {!isAuthenticated && <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Navbar;
