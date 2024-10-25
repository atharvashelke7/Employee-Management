import React from "react";
import Header from "../../others/Header";
import TaskListNum from "../../others/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = (props) => {
  return (
    <div className="p-16 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNum data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashBoard;
