import { useState } from "react";

export function ToDo() {
  const [taskName, setTask] = useState("");
  const [taksList, setTaskList] = useState([]);

  function addTask(taskName) {
    if (taskName.trim() === "") return;

    const newArray = [...taksList, { taskName, id: crypto.randomUUID() }];
    setTaskList(newArray);
  }

  function btnClickHandler(e) {
    addTask(taskName);
    setTask("");
  }

  function todoEditChange(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        name="todo_edit"
        value={taskName}
        onChange={todoEditChange}
      />
      <input type="button" value="Создать" onClick={btnClickHandler} />
      <ul className="todo_list">
        {taksList.map((task) => (
          <li key={task.id}>{task.taskName}</li>
        ))}
      </ul>
    </>
  );
}
