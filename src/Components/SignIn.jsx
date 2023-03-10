import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";


const SignIn = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleSignIn = async () => {
    let result = await fetch(`/signin`, {
      method: "post",
      body: JSON.stringify({ Email, Password }),
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
      },
    });
    console.log(result)


    result = await result.json();

    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Incorrect Details");
    }
  };

  

  return (
    <div className="container_signIn">
      <div className="SignIn">
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={Email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={Password}
        />
        <button className="sign_in_btn" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
