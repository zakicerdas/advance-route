
import { NavLink } from "react-router-dom";
import { useAuth } from "./authContext"; 

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `hover:text-yellow-300 transition ${
                  isActive ? "font-bold underline" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
        {isAuthenticated ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-500 transition"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}
