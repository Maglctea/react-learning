import { Message } from "./components/message/message";
import "./App.css";

function App() {
  return (
    <>
      <div className="chat">
        <Message
          name="You"
          time="21:00"
          text="текст текст текст текст текст "
        />
        <Message
          name="You"
          time="21:01"
          text="текст текст текст текст текст "
        />
        <Message
          name="Щербаков Даниил"
          time="21:01"
          text="текст текст текст текст текст "
        />
        <Message
          name="You"
          time="21:02"
          text="текст текст текст текст текст "
        />
        <Message
          name="Щербаков Даниил"
          time="21:03"
          text="текст текст текст текст текст "
        />
        <Message
          name="Щербаков Даниил"
          time="21:05"
          text="текст текст текст текст текст "
        />
      </div>
    </>
  );
}

export default App;
