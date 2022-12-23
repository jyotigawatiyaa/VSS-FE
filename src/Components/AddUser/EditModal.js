import React, { useEffect, useState } from "react";
import { Container, Col, Row, Modal } from "react-bootstrap";
import Axios from "axios";
import Success from "../Alert/Success";
import Failure from "../Alert/Failure";
import LoaderComp from "../Loader/LoaderComp";

const EditModal = ({ show, setShow, id }) => {
  const [prev, setPrev] = useState({
    firstName: "",
    lastName: "",
    phone_no: "",
    tenure: "",
    role: "",
    joined_date: "",
    password: "",
  });
  const [successfull, setSuccessfull] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setPrev({ ...prev, [e.target.name]: e.target.value });
  };
  const formData = {
    firstName: prev?.firstName,
    lastName: prev?.lastName,
    role: prev?.role,
    phone_no: prev?.phone_no,
    tenure: prev?.tenure,
    joined_date: prev?.joined_date,
    password: prev?.password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setTimeout(async () => {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjYwM2IzNDM5MzViODI2MjBhMDg5ZTkwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIn0sImlhdCI6MTYxNTg5MTU2MSwiZXhwIjoxNjE1OTc3OTYxfQ.exU8x5APvJBqlVKtIHHSYrqXMNKu38GyusySo-ZxCp4";
        await Axios.put(
          `http://65.0.129.68/api/v1/user_management/edit/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        ).then((response) => {
          if (response.status === 201) {
            setLoading(false);
            setSuccessfull(true);
          }
        });
        setTimeout(() => {
          setSuccessfull(false);
        }, 3000);
      });
    } catch (error) {
      setLoading(false);
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjYwM2IzNDM5MzViODI2MjBhMDg5ZTkwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIn0sImlhdCI6MTYxNTg5MTU2MSwiZXhwIjoxNjE1OTc3OTYxfQ.exU8x5APvJBqlVKtIHHSYrqXMNKu38GyusySo-ZxCp4";
      await Axios.get(`http://65.0.129.68/api/v1/user_management/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => {
        const userValue = response?.data?.res;
        console.log(userValue);
        setPrev(userValue);
      });
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Modal
        size="lg"
        className="modal"
        show={show}
        onHide={(e) => setShow(false)}>
        <Success
          show={successfull}
          variant={"success"}
          message={"User Updated Successfully"}
        />
        <Failure
          show={failure}
          variant={"danger"}
          message={"something Went Wrong"}
        />
        <Modal.Header className="modal_header">
         
        </Modal.Header>
        <form onSubmit={handleSubmit} autoComplete="off" autoCapitalize="true">
          <Modal.Body className="modal_body">
            <Container className="col-lg-12  ">
              <Row
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "grid",
                  marginBottom: "20px",
                }}
              >
                <Col>
                  {prev?.user_image ? (
                    <img
                      src={"http://" + prev?.user_image}
                      alt="profilePic"
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        border: "6px solid lightgrey",
                        boxShadow: "0px 2px 6px grey",
                      }}
                    />
                  ) : (
                    <div></div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <input
                    type="text"
                    name="firstName"
                    className="modal_input"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={prev?.firstName}
                    required
                    maxLength="20"
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    name="lastName"
                    className="modal_input"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={prev?.lastName}
                    required
                    maxLength="20"
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <input
                    type="number"
                    name="phone_no"
                    className="modal_input"
                    placeholder="Phone No."
                    onChange={handleChange}
                    value={prev?.phone_no}
                    required
                    maxLength="20"
                  />
                </Col>
                <Col>
                  <input
                    type="text"
                    name="tenure"
                    className="modal_input"
                    placeholder="Tenure"
                    onChange={handleChange}
                    value={prev?.tenure}
                    required
                    maxLength="20"
                  />
                </Col>
              </Row>

              <Row className="mt-2">
                <Col>
                  <select
                    class="form-select modal_input"
                    aria-label="Default select example"
                    onChange={handleChange}
                    value={prev?.role}
                    name="role"
                    required
                    maxLength="20"
                  >
                    <option className="defaultSelect">Role</option>
                    <option value="0">SalesManager</option>
                    <option value="1">Production Head</option>
                    <option value="2">Production Incharge </option>
                    <option value="3">Dispatch Manager </option>
                  </select>
                </Col>

                <Col>
                  <input
                    type="date"
                    name="joined_date"
                    className="modal_input"
                    placeholder="Joined Date"
                    onChange={handleChange}
                    value={prev?.joined_date}
                    required
                    maxLength="20"
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <div
                    className="col-lg-6 col-sm-6 col-md-6 col-xl-6"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <input
                      type="password"
                      name="password"
                      className="modal_input"
                      placeholder="Password"
                      onChange={handleChange}
                      value={prev?.password}
                      required
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* <div className="file_container">
                    <input
                      type="file"
                      name="user_image"
                      onChange={handleFile}
                      id="file"
                      defaultValue={image.user_image.name}
                    />

                    <label className="custom-file-label" for="customFile">
                      {image.user_image ? image.user_image.name : "chooseFile"}
                    </label>
                    <button className="file_button" id="btn">
                      {image.user_image ? (
                        image.user_image.name
                      ) : (
                        <i class="fas fa-upload px-4">Profile Image</i>
                      )}
                    </button>
                  </div> */}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="modal_footer">
            <button
              className="close_button"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault(e);
                setShow(false);
              }}
            >
              Close
            </button>
            <button
              disbaled
              style={{ height: "auto", minHeight: "45px" }}
              className="submit_button"
              variant="primary"
              type="submit"
            >
              {loading ? (
                <LoaderComp
                  type={"Circles"}
                  hidden={true}
                  height={30}
                  color={"white"}
                />
              ) : (
                "Update User"
              )}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
