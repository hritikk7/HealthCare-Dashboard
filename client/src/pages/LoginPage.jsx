import React from "react";

function LoginPage() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center ">
      <div className="max-w-md w-full px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-center mb-8">Hospital X</h3>
        <div className=" p-8">
          <h5 className="text-xl font-bold mb-4">Log In</h5>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm mb-1">Username / Email</label>
            <input type="text" id="username" className="w-full h-10 border-2 rounded-lg p-2 text-sm" placeholder="mail@website.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input type="password" id="password" className="w-full h-10 border-2 rounded-lg p-2 text-sm" placeholder="**********" />
          </div>
          <button className="w-full h-10 bg-blue-600 rounded-lg text-white">Log In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
