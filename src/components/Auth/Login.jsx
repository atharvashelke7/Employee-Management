import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail(""), setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-16 rounded-xl">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none border-2 border-emerald-600 bg-transparent placeholder:text-gray-400  text-xl py-3 px-5 rounded-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none border-2 border-emerald-600 mt-3 bg-transparent placeholder:text-gray-400  text-xl py-3 px-5 rounded-full"
            type="password"
            placeholder="Password"
          />
          <button className="text-white outline-none  bg-emerald-600 mt-5 placeholder:text-white  text-md font-semibold py-2 px-28 rounded-full uppercase">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
