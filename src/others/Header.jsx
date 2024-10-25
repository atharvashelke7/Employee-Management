import React, { useState } from "react";
import { setLocalStorage } from "../utlis/localStorage";

const Header = (props) => {
  // const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstname);
  // }

  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium font-['Founders_Grotesk']">
        Hello, <br />
        <span className="text-3xl font-semibold">username</span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md "
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
