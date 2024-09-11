import { IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";

export function TodoItem(props) {
  const { taskValue, btnClickCallback} = props;
  return (
    <>
      <Card variant="outlined" sx={{ display: "flex", maxWidth: 275, alignItems: "flex-end", flexDirection: "column", px: 1, pb: 1}}>
        
      <IconButton aria-label="delete" onClick={btnClickCallback}>
          <DeleteIcon />
        </IconButton>
        <CardContent>
          <Typography variant="body2" component="div">
            {taskValue}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
