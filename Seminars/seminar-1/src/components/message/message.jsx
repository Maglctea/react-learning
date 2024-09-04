import "./message.css";

export function Message(message) {
  const messageStyle = message.name === "You" ? "message_green" : "message_blue";
  const messageAlign = message.name === "You" ? "message_right" : "message_left";

  return (
    <>
      <div className={`message_block ${messageStyle} ${messageAlign}`}>
        <div className={`message_header ${messageStyle}`}>
          <span className={`message_author ${messageStyle}`}>{message.name}</span>
          <span className="message_time">{message.time}</span>
        </div>
        <div className="message_text">{message.text}</div>
      </div>
    </>
  );
}
