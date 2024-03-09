import { useEffect, useState } from "react";
import { getOne, deleteOne, modifyTodo } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

import ResultModal from "../common/ResultModal";

import React from "react";

const initState = {
  tno: "",
  title: "",
  content: "",
  dueDate: "",
  completed: false,
};

const ModifyComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);

  const [result, setResult] = useState(null);

  const { moveToList, moveToRead } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]); // tno가 변경될 때마다 실행

  const handleChangeTodo = (e) => {
    console.log(e.target.name, e.target.value);
    todo[e.target.name] = e.target.value;

    setTodo({
      ...todo,
    });
  };
  const handleChangeTodoComplete = (e) => {
    console.log(e.target.name, e.target.value);
    todo.completed = e.target.value === "true";
    setTodo({
      ...todo,
    });
  };

  const handleClickModify = () => {
    console.log("modify");
    modifyTodo(todo).then((result) => {
      console.log(result);
      setResult("Modified");
    });
  };

  const handleClickDelete = () => {
    console.log("delete");
    deleteOne(tno).then((result) => {
      console.log(result);
      setResult("Deleted");
    });
  };

  const closeModal = () => {
    if (result === "Deleted") {
      moveToList();
    } else {
      moveToRead(tno);
    }
  };

  return (
    <div className="border 2 border sky 200 mt 10 m 2 p 4">
      {result ? (
        <ResultModal
          title={"처리결과"}
          content={result}
          callbackFn={closeModal}
        ></ResultModal>
      ) : (
        <></>
      )}

      <div className="flex justify center mt 10">
        <div className="relative mb 4 flex w full flex wrap items stretch">
          <div className="w 1 5 p 6 text right font bold"> TNO</div>
          <div className="w 4 5 p 6 rounded r border border solid shadow md bg gray 100">
            {" "}
            {todo.tno}
          </div>
        </div>
      </div>

      <div className="flex justify center">
        <div className="relative mb 4 flex w full flex wrap items stretch">
          <div className="w 1 5 p 6 text right font bold"> TITLE</div>
          <input
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>

      <div className="flex justify center">
        <div className="relative mb 4 flex w full flex wrap items stretch">
          <div className="w 1 5 p 6 text right font bold"> CONTENT</div>
          <input
            name="content"
            type="text"
            value={todo.content}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify center">
        <div className="relative mb 4 flex w full flex wrap items stretch">
          <div className="w 1 5 p 6 text right font bold"> DUE DATE</div>
          <input
            name="dueDate"
            type="text"
            value={todo.dueDate}
            onChange={handleChangeTodo}
          ></input>
        </div>
      </div>
      <div className="flex justify center">
        <div className="relative mb 4 flex w full flex wrap items stretch">
          <div className="w 1 5 p 6 text right font bold"> COMPLETED</div>
          <select
            name="completed"
            value={todo.completed}
            onChange={handleChangeTodoComplete}
          >
            <option value="true"> Completed</option>
            <option value="false"> Not Yet</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end p-4">
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={handleClickDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
          onClick={handleClickModify}
        >
          Modify
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
