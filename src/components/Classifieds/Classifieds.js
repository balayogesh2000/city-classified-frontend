import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Select from "../common/Select/Select";
import Modal from "../common/Modal/Modal";
import ActionIcons from "../ActionIcons/ActionIcons";
import Title from "../common/Title/Title";

import classes from "./Classifieds.module.css";

const informationData = [
  {
    title: "Need Teacher",
    contact: 1111111111,
    email: "abc@gmail.com",
    city: "Chennai",
    subject: "Teacher",
  },
  {
    title: "Need Cars",
    contact: 2222222222,
    email: "def@gmail.com",
    city: "Banglore",
    subject: "Cars",
  },
  {
    title: "Need Electrical & Plumbing service",
    contact: 3333333333,
    email: "ghi@gmail.com",
    city: "Mumbai",
    subject: "Electrical",
  },
  {
    title: "Need Packers & Movers",
    contact: 444444444,
    email: "jkl@gmail.com",
    city: "Kolkata",
    subject: "Packers",
  },
];

const Information = () => {
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");
  const [infoList, setInfoList] = useState(informationData);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (info) => {
    setShow(true);
    setModalData(info);
  };

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
    const filtered = informationData.filter(
      (item) => item.city === e.target.value && subject === item.subject
    );
    setInfoList(filtered);
  };

  const subjectChangeHandler = (e) => {
    setSubject(e.target.value);
    const filtered = informationData.filter(
      (item) => item.subject === e.target.value && city === item.city
    );
    setInfoList(filtered);
  };

  return (
    <div className={classes.Information}>
      <div className={classes.container}>
        <Title title="View Classifieds" />
        <div className={classes.selectContainer}>
          <Select
            options={["Chennai", "Banglore", "Mumbai", "Kolkata"]}
            label="Select the city"
            value={city}
            onChange={cityChangeHandler}
          />
          <div style={{ height: "10px" }}></div>
          <Select
            label="Select the Classified"
            options={["Teacher", "Cars", "Electrical", "Packers"]}
            value={subject}
            onChange={subjectChangeHandler}
          />
        </div>
        <div
          className={classes.informationContainer}
          style={{ marginTop: "20px" }}
        >
          {infoList.map((info) => {
            return (
              <Card>
                <Card.Body>
                  <Card.Title
                    style={{
                      marginBottom: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {info.title}
                    <ActionIcons />
                  </Card.Title>
                  <Card.Text>
                    <p>Contact Number : {info.contact}</p>
                    <p>Email : {info.email}</p>
                    <p>City : {info.city}</p>
                  </Card.Text>
                  <Button
                    onClick={() => openModal(info)}
                    variant="primary"
                    style={{ marginTop: "10px" }}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        {JSON.stringify(infoList) === "[]" ? (
          <p style={{ textAlign: "center" }}>No records found</p>
        ) : null}
      </div>
      <Modal show={show} setShow={setShow} title={modalData.title}>
        <p>Contact Number : {modalData.contact}</p>
        <p>Email : {modalData.email}</p>
        <p>City : {modalData.city}</p>
      </Modal>
    </div>
  );
};

export default Information;
