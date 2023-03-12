import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { logo } from "../assets/utils";
import Search from "./Search";

const Navbar = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem("user");

  const logout = () =>{
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <div className="Navbar">
      <Link to="/signin">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="register-bx">
        {auth ? (
          <>
            <div className="logout">
              <Link to="/signup" onClick={logout} className="logout-btn">
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/signin" className="SignIN">
              SignIn
            </Link>
            <Link to="/signup" className="SignUp-btn">
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
