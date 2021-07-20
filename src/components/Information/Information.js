import React from "react";
import { Card, Button } from "react-bootstrap";
import Select from "../../components/common/Select/Select";

import Title from "../common/Title/Title";

import classes from "./Information.module.css";

const informationData = [
  {
    title: "XYZ Hospital",
    contact: 8888888888,
    email: "xyz@gmail.com",
  },
  {
    title: "ABC School",
    contact: 1234567890,
    email: "ABC@gmail.com",
  },
];

const Information = () => {
  return (
    <div className={classes.Information}>
      <div className={classes.container}>
        <Title title="View Information" />
        <div className={classes.selectContainer}>
          <Select
            options={["Chennai", "Banglore", "Mumbai", "Kolkata"]}
            label="Select the city"
          />
          <div style={{ height: "10px" }}></div>
          <Select
            label="Subjects"
            options={["Hospital", "School", "Colleges", "Shopping malls"]}
          />
        </div>
        <div
          className={classes.informationContainer}
          style={{ marginTop: "20px" }}
        >
          {informationData.map((info) => {
            return (
              <Card>
                <Card.Body>
                  <Card.Title style={{ marginBottom: "15px" }}>
                    {info.title}
                  </Card.Title>
                  <Card.Text>
                    <p>Contact Number : {info.contact}</p>
                    <p>Email : {info.email}</p>
                  </Card.Text>
                  <Button variant="primary" style={{ marginTop: "10px" }}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Information;
