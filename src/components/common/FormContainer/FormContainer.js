import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../Input/Input";
import Select from "../Select/Select";

import classes from "./FormContainer.module.css";

const FormContainer = ({ data, saveButtonName, style, formSubmitHandler }) => {
  const fieldsObj = {};
  data.forEach((field) => {
    fieldsObj[field.state] = field.value ? field.value : "";
  });
  const [state, setState] = useState(fieldsObj);
  const history = useHistory();

  const changeState = (event, fieldState) => {
    setState((prevState) => {
      return {
        ...prevState,
        [fieldState]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    formSubmitHandler();
    setState(fieldsObj);
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };
  return (
    <div className={classes.formContainer} style={style}>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          {data.map((info, idx) => {
            switch (info.type) {
              case "input":
                return (
                  <Input
                    key={idx}
                    pattern={info.pattern}
                    type={info.inputType}
                    label={info.label}
                    placeholder={info.placeholder}
                    required={info.required}
                    value={state[info.state]}
                    onChange={(event) => changeState(event, info.state)}
                  />
                );
              case "select":
                return (
                  <Select
                    key={idx}
                    label={info.label}
                    required={info.required}
                    options={info.options}
                    value={state[info.state]}
                    onChange={(event) => changeState(event, info.state)}
                  />
                );
              default:
                return null;
            }
          })}
          <button
            onClick={cancelHandler}
            type="button"
            className={`btn btn-secondary ${classes.cancel}`}
          >
            Cancel
          </button>
          <button type="submit" className={`btn btn-primary ${classes.submit}`}>
            {saveButtonName ? saveButtonName : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
