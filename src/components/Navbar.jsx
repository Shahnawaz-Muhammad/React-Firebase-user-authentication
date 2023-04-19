import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const navItems = [
    { id: 1, title: "home", url: "" },
  ];
  const { currentUser, logout } = UserAuth();
  console.log("navbar user",currentUser)
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <nav className="bg-slate-600 w-full h-20 flex justify-center">
      <div className="w-[85%] text-white flex items-center flex-row justify-between">
        <h2 className="text-xl font-bold text-uppercase">LOGO</h2>
        <div>
          <ul className="flex flex-row justify-between gap-5 items-center uppercase text-lg cursor-pointer">
            {navItems.map((item) => {
              return (
                <li
                  className=" border-yellow-500 hover:border-b-2 ease-in"
                  key={item.id}
                >
                  <NavLink to={`/${item.url}`}>{item.title}</NavLink>
                </li>
              );
            })}

            <div className="flex gap-2">
              {currentUser ?  (
                <>
                  <Link
                    type="button"
                    to="/account"
                    className="bg-transparent px-3 py-1 border-2 border-yellow-500 rounded-md"
                  >
                    Account
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="bg-yellow-600 px-3 py-1 border-2 border-yellow-600  rounded-md text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    type="button"
                    to="/login"
                    className="bg-transparent px-3 py-1 border-2 border-yellow-500 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    type="button"
                    to="/register"
                    className="bg-yellow-600 px-3 py-1 border-2 border-yellow-600  rounded-md text-white"
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
