import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListOrder.css";
import Axios from "axios";
import LoaderComp from "../Loader/LoaderComp";
import BillingPagination from "../Billing/BillingPagination";

const ListOrder = ({ match }) => {
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

  //chnagePag

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  useEffect(
    (e) => {
      setTimeout(async () => {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjYwM2IzNDM5MzViODI2MjBhMDg5ZTkwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIn0sImlhdCI6MTYxNTg5MTU2MSwiZXhwIjoxNjE1OTc3OTYxfQ.exU8x5APvJBqlVKtIHHSYrqXMNKu38GyusySo-ZxCp4";
        await Axios.get("http://65.0.129.68/api/v1/BillingManagement/all", {
          headers: { Authorization: `Bearer ${token}` },
        }).then((res) => {
          const response = res.data;
          const finalResponse = response.output.results;
          setItem(finalResponse);
          // console.log(item);
        });
      }, 1000);
    },
    [item]
  );

  return (
    <>
      {currentPosts.length !== 0 ? (
        <Container>
          <>
            <Row style={{ marginTop: "20px" }}>
              <div className="w-100" style={{ display: "flex" }}>
                <h4 style={{ color: "#7d8488" }}>Orders</h4>

                <Col className="col-lg-4 ms-auto">
                  <Link to={`${match}/create_order`}>
                    <button className="create-Button">+ Create Order</button>
                  </Link>
                </Col>
              </div>
            </Row>
            <Row>
              {currentPosts.map((val, index) => (
                <>
                  <Col key={val._id}>
                    <Container
                      className=" my-2 orderDiv col-xs-8 col-sm-8 col-md-6 col-lg-6 col-xl-6 p-3"
                      style={
                        Math.abs(index % 2) === 1
                          ? { backgroundColor: "#cddde8" }
                          : { backgroundColor: "lightgrey" }
                      }
                    >
                      <Row>
                        <Col>
                          <Row style={{ fontSize: "15px" }}>
                            <Col className="col-lg-4 col-sm-4">
                              <h4 className="main_heading">OrderId</h4>
                            </Col>
                            <Col className="col-lg-1 col-sm-1">-</Col>
                            <Col className="col-lg-6 col-sm-6 main_content">
                              {val.orderId}
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Col
                            className="d-flex me-auto"
                            style={{ fontSize: "15px", align: "right" }}
                          >
                            <div className="ms-auto d-flex">
                              <p className="heading mr-1">
                                <b>Deliver Date</b>
                              </p>
                              <p>-</p>
                              <p>{val.deliveryDate}</p>
                            </div>
                          </Col>
                        </Col>
                      </Row>
                      <Row className="pt-1">
                        <Col className="col-lg-4 col-sm-4">
                          <h6 className="heading">
                            Client Name <i class="fas fa-user-tie"></i>
                          </h6>
                        </Col>
                        <Col className="col-lg-1 col-sm-1">-</Col>
                        <Col className="col-lg-6 col-sm-6 content">
                          {val?.clientName}
                        </Col>
                      </Row>
                      <Row className="pt-1">
                        <Col className="col-lg-4 col-sm-4">
                          <h6 className="heading">
                            Firm Name <i class="fas fa-user-tie"></i>
                          </h6>
                        </Col>
                        <Col className="col-lg-1 col-sm-1">-</Col>
                        <Col className="col-lg-6 col-sm-6 content">
                          {val.firmName}
                        </Col>
                      </Row>
                      <Row className="pt-1">
                        <Col className="col-lg-4 col-sm-4">
                          <h6 className="heading">
                            OrderId <i class="fas fa-user-tie"></i>
                          </h6>
                        </Col>
                        <Col className="col-lg-1 col-sm-1">-</Col>
                        <Col className="col-lg-6 col-sm-6 content">
                          {val.orderId}
                        </Col>
                      </Row>
                      <Row className="pt-1">
                        <Col className="col-lg-4 col-sm-4">
                          <h6 className="heading">Address</h6>
                        </Col>
                        <Col className="col-lg-1 col-sm-1">-</Col>
                        <Col className="col-lg-6 col-sm-6 content">
                          {val.address}
                        </Col>
                      </Row>
                      <Row className="pt-1">
                        <Col className="col-lg-4 col-sm-4">
                          <h6 className="heading">PhoneNumber</h6>
                        </Col>
                        <Col className="col-lg-1 col-sm-1">-</Col>
                        <Col className="col-lg-6 col-sm-6 content">
                          {val.phone_no}
                        </Col>
                      </Row>
                      {/* <Row className="pt-1">
                          <Col className="col-lg-4 col-sm-4">
                            <h6 className="heading">ProductId</h6>
                          </Col>
                          <Col className="col-lg-1 col-sm-1">-</Col>
                          <Col className="col-lg-6 col-sm-6  content">
                            {v.productId}
                          </Col>
                        </Row>
                        <Row className="pt-1">
                          <Col className="col-lg-4 col-sm-4">
                            <h6 className="heading">Products</h6>
                          </Col>
                          <Col className="col-lg-1 col-sm-1">-</Col>
                          <Col className="col-lg-6 col-sm-6 content">
                            {v.selectProduct}
                            {JSON.stringify(v.select_product)}
                          </Col>
                        </Row>
                        <Row className="pt-1">
                          <Col className="col-lg-4 col-sm-4">
                            <h6 className="heading">Weight</h6>
                          </Col>
                          <Col className="col-lg-1 col-sm-1">-</Col>
                          <Col className="col-lg-6 col-sm-6 content">
                            {v.weight}
                          </Col>
                        </Row> */}
                      <Row>
                        <button
                          className="ms-auto"
                          style={{
                            width: "auto",
                            marginRight: "10px",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "#0e2434",
                              fontSize: "14px",
                            }}
                            to={`${match}/listOrder/${val._id}`}
                          >
                            View More..
                          </Link>
                        </button>
                      </Row>
                       {/* <Row>
                    <Container className="d-flex">
                      <Link
                        style={{
                          fontSize: "1rem",
                          textDecoration: "none",
                          color: "#0e2434",
                        }}
                        className="ms-auto"
                        to={`${match}/ViewMoreList/${val._id}`}
                      >
                        View More
                      </Link>
                    </Container>
                  </Row> */}
                    </Container>
                  </Col>
                </>
              ))}
            </Row>
            <Row>
              <Container
                className="col-xl-8 col-lg-8 col-md-8 col-sm-8"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "grid",
                }}
              >
                <BillingPagination
                  postsPerPage={postsPerPage}
                  totalPosts={item.length}
                  paginate={paginate}
                />
              </Container>
            </Row>
          </>
        </Container>
      ) : (
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "grid",
            marginTop: "20%",
          }}
        >
          <LoaderComp type={"Circles"} height={100} color={"#0e2434"} />
        </Container>
      )}
    </>
  );
};

export default ListOrder;
