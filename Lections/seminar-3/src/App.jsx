import { MessageList } from "./components/MessageList/MessageList";
import "./App.css";
import { TextDisplayForm } from "./components/TextDisplayForm/TextDisplayForm";

function App() {
  // const messages = [
  //   { id: 1, name: "Вы", text: "Привет", time: "21:30" },
  //   { id: 2, name: "Иван", text: "Привет", time: "21:30" },
  //   { id: 3, name: "Вы", text: "Как дела?", time: "21:30" },
  // ]
  return (
    <>
      {/* <div className="chat">
      <MessageList messages={messages}/>
      </div> */}
      
      <TextDisplayForm />
    </>
  );

}

export default App;
