import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });
  const handelOnchange = (e: any) => {
    const { name, value } = e.target;
    setLoginData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handelLogin = () => {
    navigate("/home");
    console.log("login data", loginData);
    setLoginData({
      name: "",
      password: "",
    });
  };
  return (
    <form className="mx-5 text-center mt-5 pt-5" onSubmit={handelLogin}>
      <div className="mt-5">
        <label>
          <span className="mx-3 fs-5 blue"> UserName : </span>
          <input
            type="text"
            placeholder="Enter UserName"
            name="name"
            className="input-field"
            required
            value={loginData.name}
            onChange={handelOnchange}
          />
        </label>
      </div>

      <div className="mt-5">
        <label>
          <span className="mx-3 fs-5 blue"> Password :</span>
          <input
            type="password"
            placeholder="Enter password"
            required
            name="password"
            className="input-field"
            value={loginData.password}
            onChange={handelOnchange}
          />
        </label>
      </div>

      <div className="mt-5 text-center">
        <button type="submit" className="btn btn-primary px-3">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
