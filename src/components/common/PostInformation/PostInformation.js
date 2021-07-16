import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContainer from "../FormContainer/FormContainer";

import classes from "./PostInformation.module.css";

const data = [
  {
    type: "select",
    required: true,
    label: "Subject",
    options: ["Shopping Malls", "Schools", "Colleges", "Hospitals"],
    state: "subject",
    value: "",
  },
  {
    type: "input",
    required: true,
    label: "Address Line 1",
    placeholder: "Address Line 1",
    state: "addressLine1",
    value: "",
  },
  {
    type: "input",
    label: "Address Line 2",
    placeholder: "Address Line 2",
    state: "addressLine2",
    value: "",
  },
  {
    type: "input",
    label: "City",
    required: true,
    placeholder: "City",
    state: "City",
    value: "",
  },
  {
    type: "input",
    label: "State",
    required: true,
    placeholder: "State",
    state: "State",
    value: "",
  },
  {
    type: "input",
    label: "Zip",
    required: true,
    pattern: "[0-9]{6}",
    placeholder: "Zip",
    state: "Zip",
    value: "",
  },
  {
    type: "input",
    label: "Contact Number",
    required: true,
    placeholder: "Contact Number",
    pattern: "[0-9]{10}",
    state: "ContactNumber",
    value: "",
  },
  {
    type: "input",
    label: "Alternate Contact Number",
    placeholder: "Alternate Contact Number",
    pattern: "[0-9]{10}",
    state: "AlternateContactNumber",
    value: "",
  },
  {
    type: "input",
    inputType: "email",
    label: "Email",
    required: true,
    placeholder: "Email",
    state: "Email",
    value: "",
  },
  {
    type: "input",
    label: "Fax",
    placeholder: "Fax",
    state: "Fax",
    value: "",
  },
  {
    type: "input",
    label: "Remarks",
    placeholder: "Remarks",
    state: "Remarks",
    value: "",
  },
  {
    type: "input",
    label: "Posted On",
    placeholder: "Posted On",
    state: "PostedOn",
    value: "",
  },
  {
    type: "input",
    label: "Posted By",
    placeholder: "Posted By",
    state: "PostedBy",
    value: "",
  },
];

const PostInformation = ({ role }) => {
  const notify = () => toast.success("Form Submitted Successfully!");
  return (
    <>
      <h4 className={classes.title}>{role} - Post Information</h4>
      <div className={classes.PostInformation}>
        <FormContainer
          data={data}
          saveButtonName="Post"
          formSubmitHandler={notify}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default PostInformation;
