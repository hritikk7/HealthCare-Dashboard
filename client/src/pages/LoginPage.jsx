import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { Name } from "../context/Name/NameContext";
function LoginPage() {
  const navigate = useNavigate();
  const apiUrl = "http://127.0.0.1:8080/api/user/login";
  const [userCred, setUserCred] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const { user, setUser } = useContext(Name);

  const hadnleLogin = (e) => {
    e.preventDefault();

    if (userCred == "" || password == "") {
      setErrMsg("Fill all the Fileds");
    }
    loginCall();
  };

  const loginCall = async () => {
    console.log("inside logincall");
    try {
      const data = {
        username: userCred,
        email: userCred,
        password,
      };
      const response = await axios.post(apiUrl, data);
      console.log(response.data);

      if (response.data.message === "Login Succesfull") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/dashboard");
      }
      // console.log("res", response);
    } catch (err) {
      console.log("Error Loggin in", err);
      setErrMsg("Error Loggin in");
      if (
        err.response &&
        err.response.data &&
        err.response.data.message === "user not found"
      ) {
        setErrMsg("User not found");
        // alert("User already exists. Please use a different email.");
      } else if (
        err.response &&
        err.response.data &&
        err.response.data.message === "password dosent match"
      ) {
        setErrMsg("Incorrect Password");
        // alert("User already exists. Please use a different email.");
      } else {
        console.log("Error Logging User: ", err);
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
          <h5 className="text-xl font-bold mb-4">Log In</h5>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUserCred(e.target.value)}
              className="w-full h-10 border-2 rounded-lg p-2 text-sm"
              placeholder="mail@website.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-10 border-2 rounded-lg p-2 text-sm"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full h-10 bg-blue-600 rounded-lg text-white"
            onClick={(e) => hadnleLogin(e)}
          >
            Log In
          </button>
          {errMsg && <p className="text-base text-red-600">{errMsg}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
