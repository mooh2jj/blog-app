import React, { useEffect } from "react";
import { useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
  tno: 0,
  title: "",
  content: "",
  completed: false,
  dueDate: "",
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);

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
