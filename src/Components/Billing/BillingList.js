import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Billing.css";
import BillingPagination from "./BillingPagination";

const BillingList = ({ match }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const fetchData = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjYwNTFkMDBkZWRhN2RkYTIwOWJmZjY2NyIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IjIxMjMyZjI5N2E1N2E1YTc0Mzg5NGEwZTRhODAxZmMzIn0sImlhdCI6MTYxNzYxNjE0NiwiZXhwIjoxNjE3NzAyNTQ2fQ.oMYd1wQIpCxxRlnl-XNX2oY2YYOlarjK3jk-SSOxdqw";
    await Axios.get("http://65.0.129.68/api/v1/BillingManagement/all", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((response) => {
      if (response.status === 201) {
        const output = response.data.output.results;
        setItem(output);
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [item]);

  // Pagination Logics

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

  //chnagePage

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <Container className="mt-4 col-xl-10 col-md-10 col-md-12 col-sm-10">
      <h3 style={{ color: "grey", marginBottom: "20px" }}>Billing List</h3>

      <Container>
        <Row className="mb-4">
          {currentPosts.map((val) => (
            <>
              <Col
                key={val._id}
                className="col-xl-6 col-lg-6 col-sm-12 col-md-12 mb-3"
              >
                <Container className="billing_container p-3">
                  <Row>
                    <Container className="d-flex">
                      <div className="d-flex heading">
                        <p>OrderId</p>
                        <p>-</p>
                        <p>{val.orderId}</p>
                      </div>
                      <div className="d-flex ms-auto heading">
                        <p>Delivery-Date</p>
                        <p>-</p>
                        <p>{val.deliveryDate}</p>
                      </div>
                    </Container>
                  </Row>
                  <Row>
                    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3 heading">
                      FirmName
                    </Col>
                    <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
                    <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7 content">
                      {val.firmName}
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3 heading">
                      Phone
                    </Col>
                    <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
                    <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7 content">
                      {val.phone_no}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3 heading">
                      Address
                    </Col>
                    <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
                    <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7 content">
                      {val.address}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3 heading">
                      City
                    </Col>
                    <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
                    <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7 content">
                      {val.city}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3 heading">
                      FirmName
                    </Col>
                    <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
                    <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7 content">
                      {val.sales_name}
                    </Col>
                  </Row>
                  <Row>
                    <Container className="d-flex">
                      <Link
                        style={{
                          fontSize: "1rem",
                          textDecoration: "none",
                          color: "#0e2434",
                        }}
                        className="ms-auto"
                        to={`${match}/billing/${val._id}`}
                      >
                        View More
                      </Link>
                    </Container>
                  </Row>
                </Container>
              </Col>
            </>
          ))}
        </Row>
      </Container>
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "grid",
          marginBottom: "50px",
        }}
      >
        <BillingPagination
          postsPerPage={postsPerPage}
          totalPosts={item.length}
          paginate={paginate}
        />
      </Container>
    </Container>
  );
};

export default BillingList;
