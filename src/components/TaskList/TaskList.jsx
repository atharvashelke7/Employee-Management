import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[65%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-12  mt-10"
    >
      {data.tasks.map((e, i) => {
        if (e.active) {
          return <AcceptTask key={i} data={e} />;
        }
        if (e.newTask) {
          return <NewTask key={i} data={e} />;
        }
        if (e.completeTask) {
          return <CompleteTask key={i} data={e} />;
        }
        if (e.failedTask) {
          return <FailedTask key={i} data={e} />;
        }
      })}
    </div>
  );
};

export default TaskList;
