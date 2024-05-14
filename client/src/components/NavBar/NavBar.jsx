import React from "react";
import { Navigate, useNavigate } from "react-router";

export default function NavBar() {
  const userName = localStorage.getItem("username");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };
  return (
    <div className="h-20 w-full flex  items-center justify-between px-20 shadow-lg">
      <div className="">
        <h3 className="text-3xl font-bold">
          {userName ? userName : "UserName"}
        </h3>
      </div>
      <div className="">
        <button
          className="text-red-500 font-semibold text-lg"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
