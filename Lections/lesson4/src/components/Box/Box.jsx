import React, { useState } from "react";
import style from "./Box.css";
import { ClassNames } from "classnames";

export const Box = ({ customStyle, style, hildren }) => {
  return (
    <>
      <div className={ClassNames(style.Boxcontainer, customStyle)} style={{ ...style }}>
        {children}
      </div>
    </>
  );
};
