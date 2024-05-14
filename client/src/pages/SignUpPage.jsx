import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUpPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleUserInput = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const apiUrl = "http://127.0.0.1:8080/api/user/register";

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userDetails.username === "" ||
      userDetails.password === "" ||
      userDetails.email === ""
    ) {
      setErrMsg("Fill all the Fileds");
    }
    registerUser();
  };

  const registerUser = async () => {
    try {
      const res = await axios.post(apiUrl, userDetails).then((res) => {
        console.log(res);
        if (res.data.message === "Registration Succesfull") {
          setUserDetails({ username: "", password: "", email: "" });
          navigate("/login");
        }
      });
    } catch (err) {
      console.log("Error Regestring User: ", err);
      if (
        err.response &&
        err.response.data &&
        err.response.data.message === "User already exists !!"
      ) {
        setErrMsg("User already exists");
        // alert("User already exists. Please use a different email.");
      } else {
        console.log("Error Regestring User: ", err);
        setErrMsg("Error Regestring User");
      }
    }
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center ">
      <div className="max-w-md w-full px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-center mb-8">
          Hospital X
        </h3>
        <div className=" p-8">
          <h5 className="text-xl font-bold mb-4">Sign Up</h5>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm mb-1">
              {" "}
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => handleUserInput(e)}
              className="w-full h-10 border-2 rounded-lg p-2 text-sm"
              placeholder="mail@website.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm mb-1">
              {" "}
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => handleUserInput(e)}
              className="w-full h-10 border-2 rounded-lg p-2 text-sm"
              placeholder="username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => handleUserInput(e)}
              className="w-full h-10 border-2 rounded-lg p-2 text-sm"
              placeholder="**********"
            />
          </div>
          <button
            className="w-full h-10 bg-blue-600 rounded-lg text-white"
            onClick={(e) => handleLogin(e)}
          >
            Sign Up
          </button>
          {errMsg && <p className="text-base text-red-600">{errMsg}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
