import React from "react";
import { Container, Row } from "react-bootstrap";
import Calender from "./Calender";
import Reminder from "./Reminder";

const Last = () => {
  const todays = new Date();

  const mm = todays.toLocaleString("default", { month: "long" });
  const dd = todays.getDate();
  const dayName = todays.toLocaleString("default", { weekday: "long" });

  return (
    <>
      <Container className="col-lg-4 col-md-12 col-sm-12">
        <div>
          <Row>
            <h5
              style={{
                color: "#89a0b0",
                marginTop: "20px",
                marginLeft: "50px",
              }}
            >
              {dayName},{dd}-{mm}
            </h5>
          </Row>
          <Row
            style={{
              marginBottom: "50px0",
              marginLeft: "50px",
              marginTop: "20px",
            }}
          >
            <Calender />
          </Row>
          <Row style={{ marginTop: "30px", marginLeft: "50px" }}>
            <Reminder />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Last;
