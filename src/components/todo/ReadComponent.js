import React, { useEffect } from "react";
import { useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  content: "",
  completed: false,
  dueDate: "",
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);

  const { moveToList, moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]); // tno가 변경될 때마다 실행

  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("tno", todo.tno)}
      {makeDiv("title", todo.title)}
      {makeDiv("content", todo.content)}
      {makeDiv("completed", todo.complete ? "Completed" : "Not Yet")}
      {makeDiv("due date", todo.dueDate)}

      {/* buttons.........start */}
      <div className="flex justify-end p-4">
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={() => moveToList()}
        >
          List
        </button>
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={() => moveToModify(todo.tno)}
        >
          Modify
        </button>
      </div>
    </div>
  );
};

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
