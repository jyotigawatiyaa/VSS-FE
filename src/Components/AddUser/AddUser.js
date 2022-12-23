import React, { useState } from "react";
import "./AddUser.css";
import { Container, Col, Row, Modal, Alert } from "react-bootstrap";
import UserProfile from "./UserProfile";
import LoaderComp from "../Loader/LoaderComp";
import Axios from "axios";

const AddUser = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [real, setReal] = useState({
    user_image: "",
  });
  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    // setImage({ user_image: null });
  };
  const handleShow = () => setShow(true);
  const [failureAlert, setFailureAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_no: "",
    role: "",
    joined_date: "",
    tenure: "",
    password: "",
  });
  const [image, setImage] = useState({
    user_image: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    e.preventDefault();
    setImage({ user_image: e.target.files[0] });
    setReal({ user_image: URL.createObjectURL(e.target.files[0]) });
    console.log(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("firstName", input.firstName);
      formData.append("lastName", input.lastName);
      formData.append("tenure", input.tenure);
      formData.append("password", input.password);
      formData.append("phone_no", input.phone_no);
      formData.append("joined_date", input.joined_date);
      formData.append("role", input.role);
      formData.append("user_image", image.user_image);

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuZXdVc2VyIjp7Il9pZCI6IjYwM2IzNDM5MzViODI2MjBhMDg5ZTkwNyIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIn0sImlhdCI6MTYxNTg5MTU2MSwiZXhwIjoxNjE1OTc3OTYxfQ.exU8x5APvJBqlVKtIHHSYrqXMNKu38GyusySo-ZxCp4";
      await Axios.post(
        "http://65.0.129.68/api/v1/user_management/create",
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
          setSuccessAlert(true);
          e.target.reset();
        } else {
          setLoading(false);
          setFailureAlert(true);
          setTimeout(() => {
            setFailureAlert(false);
          }, 2000);
        }
      });
    } catch (error) {
      setFailureAlert(true);
      setTimeout(() => {
        setFailureAlert(false);
      }, 2000);
    }
  };

  return (
    <>
      <Modal
        size="lg"
        className="modal"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header className="modal_header  ">
          <Container>
            <Row>
              <div>
                <Alert
                  className=""
                  show={successAlert}
                  onClose={() => setSuccessAlert(false)}
                  variant="success"
                  dismissible
                  style={{
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  User Created SuccessFully
                </Alert>
              </div>
              <div>
                <Alert
                  show={failureAlert}
                  onClose={() => setFailureAlert(false)}
                  dismissible
                  variant="danger"
                  style={{
                    height: "auto",
                    textAlign: "center",
                  }}
                >
                  Something Went Worng Please try again later
                </Alert>
              </div>
            </Row>
            <Row>
              <Modal.Title className="modal_title ">Create User</Modal.Title>
            </Row>
          </Container>
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
                  {real?.user_image ? (
                    <img
                      src={real?.user_image}
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
                    value={input.firstName}
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
                    value={input.lastName}
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
                    value={input.phone_no}
                    required
                    maxLength="10"
                  />
                  <div>
                    {input.phone_no.length > 1 &&
                      (input.phone_no.length < 10 ||
                        input.phone_no.length > 10) && (
                        <span style={{ color: "red" }}>
                          * Must be of 10 digits
                        </span>
                      )}
                  </div>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="tenure"
                    className="modal_input"
                    placeholder="Tenure"
                    onChange={handleChange}
                    value={input.tenure}
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
                    value={input.role}
                    name="role"
                    required
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
                    value={input.joined_date}
                    required
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="col-lg-6 col-xl-6 col-md-6 col-sm-6phone">
                  <input
                    type="password"
                    name="password"
                    className="modal_input"
                    placeholder="Password"
                    onChange={handleChange}
                    value={input.password}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="file_container">
                    <input
                      type="file"
                      name="user_image"
                      onChange={handleFile}
                      accept="image/*"
                      id="file"
                      defaultValue={image.user_image.name}
                    />

                    {/* <label className="custom-file-label" for="customFile">
                      {image.user_image ? image.user_image.name : "chooseFile"}
                    </label> */}

                    {/* <button
                      className="file_button"
                      id="btn"
                      
                    >
                      {image.user_image ? (
                        image.user_image.name
                      ) : (
                        <i class="fas fa-upload px-4">Profile Image</i>
                      )}
                    </button> */}
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="modal_footer">
            <button
              className="close_button"
              variant="secondary"
              onClick={handleClose}
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
                "Create User"
              )}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <Container className="my-4">
        <Row>
          <div className="d-flex">
            <h4>Users</h4>
            <button className="add_btn ms-auto" onClick={handleShow}>
              <i class="fas fa-plus me-2"></i>AddUser
            </button>
          </div>
        </Row>
        <Row>
          <UserProfile />
        </Row>
      </Container>
    </>
  );
};

export default AddUser;
