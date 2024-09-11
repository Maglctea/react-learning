import "./MessageList.css";
import { useState } from "react";
import { Message } from "../Message/Message";
import PropTypes from "prop-types";

export function MessageList({ messages }) {
  const [messageList, setMessageList] = useState(messages);


  return (
    <ul className="messageList">
      {messageList.map(({id, name, text, time}) => (
        <Message
          key={id}
          name={name}
          text={text}
          time={time}
        />
      ))}
    </ul>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// rafc
// lorem