import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Badge } from "react-bootstrap";
import Axios from "axios";
import LoaderComp from "../Loader/LoaderComp";

const PurchaseView = () => {
  const [purchase, setPurchase] = useState({});
  const [pro, setPro] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          const token =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjYwM2IzNDM5MzViODI2MjBhMDg5ZTkwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIn0sImlhdCI6MTYxNTg5MTU2MSwiZXhwIjoxNjE1OTc3OTYxfQ.exU8x5APvJBqlVKtIHHSYrqXMNKu38GyusySo-ZxCp4";
          await Axios.get(`http://65.0.129.68/api/v1/purchaseStock/by/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }).then((response) => {
            console.log(response);
            if (response.status === 200) {
              const items = response?.data.res;
              const products = response?.data.res.products;
              setPurchase((input) => {
                setPurchase(items);
              });
              setPro((input) => {
                setPro(products);
              });
            }
          });
        } catch (error) {
          console.log(error);
        }
      }, 1000);
    };
    fetchData();
  }, [id]);

  return (
    <Container className="outest mt-4">
      {purchase !== "" ? (
        <Container className="col-lg-7 mt-4">
          <Row className="mt-1">
            <Col className="_head">
              <h5>PurchaseId</h5>
            </Col>
            <Col>-</Col>
            <Col className="_cont">
              <h5>{purchase?.purchaseNumber}</h5>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Vendor Name</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.vendor}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Firm Name</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.firmName}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Client Name</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.clientName}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Contact No.</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.phone_no}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">City</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.city}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Address</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.address}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Deliver Date</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.deliveryDate}</Col>
          </Row>
          <Row className="mt-1">
            <Col className="_head">Note</Col>
            <Col>-</Col>
            <Col className="_cont">{purchase?.note}</Col>
          </Row>
        </Container>
      ) : (
        <div>
          <h4>wating for orders</h4>
        </div>
      )}
      {pro.length > 0 ? (
        <Container className="viewMoreProduct">
          {pro.map((val, ind) => (
            <div className="afterOrder" key={ind}>
              <Container className="insideAfterOrder">
                <Row>
                  <div className="d-flex">
                    <h4>
                      <Badge
                        style={{ backgroundColor: "#2D3E4D" }}
                        bg="secondary"
                      >
                        {val?.select_product}
                      </Badge>
                    </h4>
                  </div>
                </Row>

                <Row>
                  <Col>
                    <label>Company</label>
                    <div className="inputSelect p-2">
                      <p>{val?.company}</p>
                    </div>
                  </Col>
                  <Col>
                    <Col>
                      <label>Grade</label>
                      <div className="inputSelect p-2">
                        <p>{val?.grade}</p>
                      </div>
                    </Col>
                  </Col>
                  <Col>
                    <Col>
                      <label>Top Color</label>
                      <div className="inputSelect p-2">
                        <p>{val?.topcolor}</p>
                      </div>
                    </Col>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <label>Coating</label>
                    <div className="inputSelect p-2">
                      <p>{val?.coatingnum}</p>
                    </div>
                  </Col>
                  <Col>
                    <label>Temper</label>
                    <div className="inputSelect p-2">
                      <p>{val?.temper}</p>
                    </div>
                  </Col>
                  <Col>
                    <label>Guard Film</label>
                    <div className="inputSelect p-2">
                      <p>{val?.guardfilm}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container className="subInputs">
                <Container className="insideInputs">
                  <Row>
                    <Col className="m-2">
                      <Row>
                        <label>Thickness</label>
                        <div className="custom_input pl-2 pt-1">
                          <p>{val?.thickness}</p>
                        </div>
                      </Row>
                    </Col>
                    <Col className="m-2">
                      <Row>
                        <label>Length</label>
                        <div className="custom_input pl-2 pt-1">
                          <p>{val?.length}</p>
                        </div>
                      </Row>
                    </Col>
                    <Col className="m-2">
                      <Row>
                        <label>width</label>
                        <div className="custom_input pl-2 pt-1">
                          <p>{val?.width}</p>
                        </div>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="m-1">
                      <Row>
                        <label>Pcs</label>
                        <div className="custom_input pl-2 pt-1">
                          <p>{val?.pcs}</p>
                        </div>
                      </Row>
                    </Col>
                    <Col className="m-1">
                      <Row>
                        <label>Weight</label>
                        <div className="custom_input pl-2 pt-1">
                          <p>{val?.weight}</p>
                        </div>
                      </Row>
                    </Col>
                    <Col className="m-1"></Col>
                  </Row>
                </Container>
              </Container>
              <Container className="justify-content-center">
                <Row>
                  <Col className="m-3">
                    <Row>
                      <label for="thickness">Rate(Basic)</label>
                      <div className="custom_input pl-2 pt-1">
                        <p>{val?.rate}</p>
                      </div>
                    </Row>
                  </Col>
                  <Col className="m-3">
                    <Row>
                      <label for="thickness">Rate(GST%)</label>
                      <div className="custom_input pl-2 pt-1">
                        <p>{val?.gst}</p>
                      </div>
                    </Row>
                  </Col>
                  {/* <Col className="m-3">
                          <Row className="mt-3 ml-auto col-1">
                            <button
                              className="addButton"
                              onClick={handleClick}
                              type="submit"
                            >
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </Row>
                        </Col> */}
                </Row>
              </Container>
            </div>
          ))}
        </Container>
      ) : (
        <Container className="viewMoreProduct" style={{ marginTop: "100px" }}>
          <LoaderComp type={"TailSpin"} color={`#738998`} height={"200"} />
        </Container>
      )}
    </Container>
  );
};
export default PurchaseView;
