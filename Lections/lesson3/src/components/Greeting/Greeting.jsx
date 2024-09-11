import "./Greeting.css";
import PropTypes from "prop-types"

function Greeting(props) {
  const hours = new Date().getHours();
    let helloText;

  if (hours > 3 && hours < 10) {
    helloText = "Доброе утро"
  } 
  else if (hours < 18) {
    helloText = "Добрый день"
  } 
  else if (hours < 23) {
    helloText = "Добрый вечер"
  } 
  else {
    helloText = "Доброй ночи"
  }

  return <h1 className="title">{helloText}, {props.name}</h1>
}

Greeting.propTypes = {
  name: PropTypes.string
}

export default Greeting;
