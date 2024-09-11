import { useState } from "react";
import { TextField } from "@mui/material";
import "./TemperatureConverter.css";

export const TemperatureConverter = () => {
  const [temperatureCelsius, setCelsius] = useState("");
  const [temperatureFahrenheit, setFahrenheit] = useState("");

  function onChangeCelsiusFieldChange(e) {
    setFahrenheit(convertCelsiusToFahrenheit(e.target.value));
    return setCelsius(e.target.value);
  }

  function onChangeFieldFahrenheitChange(e) {
    setCelsius(convertFahrenheitToCelsius(e.target.value));
    return setFahrenheit(e.target.value);
  }

  function convertFahrenheitToCelsius(temperature) {
    (temperature - 32) * 5 / 9;
  }

  function convertCelsiusToFahrenheit(temperature) {
    (temperature * 9) / 5 + 32;
  }

  return (
    <>
      <TextField
        label="Введите текст (Цельсий)"
        className="text_field"
        value={temperatureCelsius}
        onChange={onChangeCelsiusFieldChange}
        fullWidth
      />

      <TextField
        label="Введите текст (Фаренгейта)"
        className="text_field"
        value={temperatureFahrenheit}
        onChange={onChangeFieldFahrenheitChange}
        fullWidth
      />
    </>
  );
};
