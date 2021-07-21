import React from "react";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import pencilSquareImg from "../../assets/pencil-square.svg";
import classes from "./ActionIcons.module.css";

const ActionIcons = ({
  id = 0,
  editable,
  data = {},
  deleteHandler = () => {},
  editHandler = () => {},
}) => {
  return (
    <>
      {editable === "false" ? (
        <div
          className={classes.action}
          style={{ opacity: "0.5", cursor: "not-allowed" }}
        >
          <img src={pencilSquareImg} alt="Edit" onClick={() => {}} />
          <DeleteIcon onClick={() => {}} editable={editable} />
        </div>
      ) : (
        <div className={classes.action}>
          <img
            src={pencilSquareImg}
            alt="Edit"
            onClick={() => editHandler(data)}
            style={{ cursor: "pointer" }}
          />
          <DeleteIcon onClick={() => deleteHandler(id)} />
        </div>
      )}
    </>
  );
};

export default ActionIcons;
