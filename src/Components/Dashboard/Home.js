import React from "react";
import Center from "./CenterSection.js/Center";
import { Container, Row, Col } from "react-bootstrap";

import "./dashboard.css";
import Calender from "./LastSection/Calender";
import Reminder from "./LastSection/Reminder";
const Home = ({ match }) => {
  const todays = new Date();

  const mm = todays.toLocaleString("default", { month: "long" });
  const dd = todays.getDate();
  const yy = todays.getFullYear();
  const dayName = todays.toLocaleString("default", { weekday: "long" });
  return (
    <>
      <Container fluid className="Info_section d-flex">
        <Row className="d-flex">
          <Col className=" d-grid col-lg-8 col-xl-8 col-sm-12 col-md-12">
            <div>
              <Center match={match} />
            </div>
          </Col>

          <Col className="col-lg-4 col-xl-4 col-md-12 col-sm-12">
            <Container fluid>
              <div>
                <Row>
                  <h6
                    style={{
                      color: "#89a0b0",
                      marginTop: "20px",
                      marginLeft: "50px",
                    }}
                  >
                    {dayName},{dd}-{mm}-{yy}
                  </h6>
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
