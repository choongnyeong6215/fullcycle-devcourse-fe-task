import { useState } from "react";

export interface IToDo {
  id: number;
  text: string;
  isChecked: boolean;
}

const ToDoList = () => {
  const [text, setText] = useState("");

  const [toDos, setToDos] = useState<IToDo[]>([]);

  const handleNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  // create
  const addNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.length) return;

    setText("");
    setToDos((prevToDos) => [
      ...prevToDos,
      {
        id: Date.now(),
        text,
        isChecked: false,
      },
    ]);
  };

  // delete
  const deleteTask = (toDoId: number) => {
    setToDos((toDos) => toDos.filter((toDo) => toDo.id !== toDoId));
  };

  // complete
  const handleCheckBox = (toDoId: number) => {
    setToDos((toDos) =>
      toDos.map((toDo) =>
        toDo.id === toDoId ? { ...toDo, isChecked: !toDo.isChecked } : toDo
      )
    );
  };

  return (
    <>
      <header className="bg-emerald-500 flex justify-center items-center rounded-2xl ">
        <h1 className="py-4 text-xl">TO DO LIST</h1>
      </header>
      <form className="flex justify-around my-4" onSubmit={addNewTask}>
        <input
          type="text"
          placeholder="할 일을 추가해보세요!"
          className="py-2 px-1 rounded-xl w-72"
          value={text}
          onChange={handleNewTask}
        />
        <button>추가</button>
      </form>
      <ul
        className={
          toDos.length
            ? "flex flex-col border-solid border-2 border-emerald-500 px-4 rounded-xl"
            : ""
        }
      >
        {toDos.map((toDo) => (
          <li className="flex justify-between my-4" key={toDo.id}>
            <p
              className={
                toDo.isChecked ? "line-through w-full" : "no-underline"
              }
            >
              {toDo.text}
            </p>
            <div className="w-12 flex justify-between">
              <input
                type="checkbox"
                defaultChecked={toDo.isChecked}
                onChange={() => handleCheckBox(Number(toDo.id))}
              />
              <button onClick={() => deleteTask(Number(toDo.id))}>❎</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
