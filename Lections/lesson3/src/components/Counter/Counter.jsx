import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = useState(0);
  const [isDisabledDecr, setDisabledDecr] = useState(true);

  useEffect(() => {
    if (count > 0) setDisabledDecr(false);
    else setDisabledDecr(true);
  }, [count]);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="counter_block card">
      <Button
        variant="contained"
        color="error"
        onClick={decrement}
        disabled={isDisabledDecr}
      >
        -
      </Button>
      {count}
      <Button variant="contained" color="success" onClick={increment}>
        +
      </Button>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number,
};
