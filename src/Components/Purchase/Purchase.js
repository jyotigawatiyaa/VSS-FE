import React, { useState, useEffect } from "react";
import "./Purchase.css";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
import LoaderComp from "../Loader/LoaderComp";
import BillingPagination from "../Billing/BillingPagination";

const Purchase = ({ match }) => {
  const [item, setItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = item.slice(indexOfFirstPost, indexOfLastPost);

  //chnagePage
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  const getAllPosts = async () => {
    setTimeout(async () => {
      await Axios.get("http://65.0.129.68/api/v1/purchaseStock/get").then(
        (response) => {
          console.log(response);
          const data = response.data.res;
          setItem(data);
        }
      );
    }, 1000);
  };
  useEffect(() => {
    getAllPosts();
  });

  return (
    <>
      <Container className="outer_container">
        <Container className="heading_container mt-4 d-flex">
          <h4 className="purchase_heading">Purchase Stocks</h4>

          <Link className="ms-auto" to={`${match}/purchase_order`}>
            <button className="purchase_button">
              <i className="fas fa-plus m-1"></i>Purchase
            </button>
          </Link>
        </Container>
        {currentPosts.length !== 0 ? (
          <Container className="list_container mt-4">
            <>
              <Row>
                {currentPosts.map((val, ind) => (
                  <Col
                    className="col-lg-6 col-md-8 col-sm-12 col-xl-6 mb-4"
                    key={ind}>
                    <Container
                      className="detail_container py-3 pl-0"
                      style={
                        Math.abs(ind % 2) === 1
                          ? { backgroundColor: "#cddde8" }
                          : { backgroundColor: "lightgrey" }
                      }>
                      <div className="d-flex mb-2">
                        <Col className="content_heading col-lg-4">
                          Purchase Number
                        </Col>
                        <Col className="col-lg-1">
                          <b>-</b>
                        </Col>
                        <Col className="col-lg-7">{val.purchaseNumber} </Col>
                        <Col>{ind}</Col>
                      </div>
                      <div className="d-flex mb-2">
                        <Col className="content_heading col-lg-4">Vendor</Col>
                        <Col className="col-lg-1">
                          <b>-</b>
                        </Col>
                        <Col className="col-lg-7 ">{val.vendor}</Col>
                      </div>
                      <div className="d-flex mb-2">
                        <Col className="content_heading col-lg-4">
                          Delivery Date
                        </Col>
                        <Col className="col-lg-1">
                          <b>-</b>
                        </Col>
                        <Col className="col-lg-7 ">{val.deliveryDate} </Col>
                      </div>
                      <div className="d-flex mb-2">
                        <Col className="content_heading col-lg-4">FirmName</Col>
                        <Col className="col-lg-1">
                          <b>-</b>
                        </Col>
                        <Col className="col-lg-7 ">{val.firmName} </Col>
                      </div>
                      <div className="d-flex mb-2">
                        <Col className="content_heading col-lg-4">
                          Client Name
                        </Col>
                        <Col className="col-lg-1">
                          <b>-</b>
                        </Col>
                        <Col className="col=lg-7">{val.clientName}</Col>
                      </div>
                      <div className="d-flex mb-2">
                        <Col className="content_heading col-lg-4">Phone</Col>
                        <Col className="col-lg-1">
                          <b>-</b>
                        </Col>
                        <Col className="col-lg-7">{val.phone_no} </Col>
                      </div>
                      <div className="d-flex w-100 container-fluid">
                        <button
                          className="ms-auto"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "#0e2434",
                            }}
                            to={`${match}/purchase/${val._id}`}
                          >
                            View More..
                          </Link>
                        </button>
                      </div>
                    </Container>
                  </Col>
                ))}
              </Row>
              <Row>
                <Container
                  className="col-lg-8 col-xl-8 col-sm-8 col-md-8"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "grid",
                    marginBottom: "100px",
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
          <>
            <Container
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
                marginTop: "30%",
              }}>
              <LoaderComp type={"Circles"} height={100} color={"#0e2434"} />
            </Container>
          </>
        )}
        {/* Using React Paginate */}
      </Container>
    </>
  );
};

export default Purchase;
