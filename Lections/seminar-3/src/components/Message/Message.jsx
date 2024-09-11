import "./Message.css";
import PropTypes from "prop-types"

export function Message(props) {
  const { name, time, text } = props;
  return (
    <li>
      <div className={`message_block message_blue`}>
        <div className={`message_header message_blue`}>
          <div className="message_header_info">
            <span className={`message_author message_blue`}>{name}</span>
            <span className="message_time">{time}</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 64"
            width="24"
            height="24"
          ></svg>
        </div>
        <div className="message_text">{text}</div>
      </div>
    </li>
  );
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
