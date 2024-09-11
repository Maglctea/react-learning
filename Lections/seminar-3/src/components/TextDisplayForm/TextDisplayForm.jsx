import { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

export const TextDisplayForm = () => {
  const [cardText, setCardText] = useState("");
  const [text, setText] = useState("");

  function btnClick() {
    setCardText(text);
  }

  const onTextFieldChange = (e) => setText(e.target.value);

  return (
    <>
      <TextField
        label="Введите текст"
        value={text}
        onChange={onTextFieldChange}
        fullWidth
      />{" "}
      <Button onClick={btnClick}>Отобразить текст</Button>
      <Card variant="outlined" sx={{ maxWidth: 300, height: 200, display: (text.slice() === "") ? "none" : "contents" }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5">{cardText}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
