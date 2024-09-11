import { TemperatureConverter } from "./components/TemperatureConverter/TemperatureConverter";
import { TodoList } from "./components/TodoList/TodoList";
import "./App.css";

function App() {
  return (
    <>
      <TemperatureConverter />
      <hr />
      <TodoList />
    </>
  );
}

export default App;
