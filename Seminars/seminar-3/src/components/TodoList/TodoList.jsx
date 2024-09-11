import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.css";

export function TodoList() {
  const [toDoValue, setTodoValue] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTodoBtnClick() {
    const newArray = [...taskList, {value: toDoValue}];
    setTodoValue('');
    setTaskList(newArray);
  }

  function deleteTodoItem(task) {
    const newTodoList = taskList.filter((currentTask) => currentTask !== task);
    setTaskList(newTodoList);
  }

  const changeTodoValue = (e) => setTodoValue(e.target.value);

  return (
    <>
      <div className="todo_panel">
        <TextField
          label="Введите задачу"
          className="text_field"
          value={toDoValue}
          onChange={changeTodoValue}
          fullWidth
        />
        <Button
          color="primary"
          variant="contained"
          size="medium"
          onClick={addTodoBtnClick}
          fullWidth
        >
          Добавить
        </Button>
      </div>
      <div className="todo_list">
        {taskList.map((task) => (
          <TodoItem key={window.crypto.randomUUID()} taskValue={task.value} btnClickCallback={() => deleteTodoItem(task)} />
        ))}
      </div>
    </>
  );
}
