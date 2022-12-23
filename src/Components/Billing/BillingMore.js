import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";
import secret from "../config";
const BillingMore = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [product, setProduct] = useState([]);
  const print = () => {
    window.print();
  };
  const fetchData = async () => {
    try {
      await Axios.get(`${secret.Ip}/BillingManagement/get/${id}`, {
        headers: {
          Authorization: `Bearer ${secret.token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => {
        console.log(response);
        const data = response.data.res;
        const Products = response.data.res.products;
        setItem(data);
        setProduct(Products);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [item, product]);
  return (
    <>
      <Container className="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-auto my-4">
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Vivek Skyline Steel</h3>
          <button
            className="ms-auto"
            style={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "0px 2px 6px lightgrey",
              width: "50px",
            }}
            onClick={print}
          >
            Print
          </button>
        </div>
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "block",
          }}
        >
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              <h5>OrderId</h5>
            </Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
              <h5>-</h5>
            </Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              <h5>{item.orderId}</h5>
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">Firm Name</Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.firmName}
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              Client Name
            </Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.clientName}
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">Phone</Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.phone_no}
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
              Delivery Date
            </Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.deliveryDate}
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">Address</Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.address}
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">City</Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.city}
            </Col>
          </Row>
          <Row>
            <Col className="col-xl-3 col-lg-3 col-md-3 col-sm-3">Note</Col>
            <Col className="col-xl-1 col-lg-1 col-md-1 col-sm-1">-</Col>
            <Col className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
              {item.note}
            </Col>
          </Row>
        </Container>
        <Container>
          {product.map((val, ind) => (
            <Container className="mt-4" key={val._id}>
              <h4>Product - {ind + 1}</h4>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Product</Col>
                <Col>-</Col>
                <Col>{val.select_product}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Company</Col>
                <Col>-</Col>
                <Col>{val.company}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Temper</Col>
                <Col>-</Col>
                <Col>{val.temper}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Coating</Col>
                <Col>-</Col>
                <Col>{val.coatingnum}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Company</Col>
                <Col>-</Col>
                <Col>{val.company}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Grade</Col>
                <Col>-</Col>
                <Col>{val.grade}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Guard Film</Col>
                <Col>-</Col>
                <Col>{val.guardfilm}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Color</Col>
                <Col>-</Col>
                <Col>{val.topcolor}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Pcs</Col>
                <Col>-</Col>
                {/* <Col>{val.pcs}</Col> */}
                <Col>
                  <input className="subfields" name="pcs" type="number"></input>
                </Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Thickness</Col>
                <Col>-</Col>
                <Col>{val.thickness}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Weight</Col>
                <Col>-</Col>
                {/* <Col>{val.weight}</Col> */}
                <Col>
                  <input
                    className="subfields"
                    name="Weight"
                    type="number"
                  ></input>
                </Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>length</Col>
                <Col>-</Col>
                <Col>{val.length}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>width</Col>
                <Col>-</Col>
                <Col>{val.width}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Rate</Col>
                <Col>-</Col>
                <Col>{val.rate}</Col>
              </Row>
              <Row className="col-xl-8 col-lg-8 ">
                <Col>Gst</Col>
                <Col>-</Col>
                <Col>{val.gst}</Col>
              </Row>
            </Container>
          ))}
        </Container>
      </Container>
    </>
  );
};
export default BillingMore;