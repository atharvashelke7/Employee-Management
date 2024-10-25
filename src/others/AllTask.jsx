import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h3 className="text-lg font-medium w-1/5 ">Active Task</h3>
        <h3 className="text-lg font-medium w-1/5 ">Completed</h3>
        <h3 className="text-lg font-medium w-1/5 ">Failed</h3>
      </div>
      <div className="">
        {userData.map((e, i) => {
          return (
            <div
              key={i}
              className="border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium  w-1/5 text-white">
                {e.firstName}
              </h2>
              <h3 className="text-lg font-medium  w-1/5 text-blue-600">
                {e.taskNumbers.newTask}
              </h3>
              <h3 className="text-lg font-medium  w-1/5 text-yellow-400">
                {e.taskNumbers.active}
              </h3>
              <h3 className="text-lg font-medium  w-1/5 text-white">
                {e.taskNumbers.completed}
              </h3>
              <h3 className="text-lg font-medium  w-1/5 text-red-600">
                {e.taskNumbers.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
