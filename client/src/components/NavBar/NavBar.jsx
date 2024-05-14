import React from "react";

export default function NavBar() {
  return (
    <div className="h-20 w-full flex  items-center justify-between px-20 shadow-lg">
      <div className="">
        <h3 className="text-3xl font-bold">Username</h3>
      </div>
      <div className="">
        <button className="text-red-500 font-semibold text-lg">Log Out</button>
      </div>
    </div>
  );
}
