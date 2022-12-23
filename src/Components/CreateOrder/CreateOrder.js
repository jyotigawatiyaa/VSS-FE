import React, { useState, useEffect } from "react";
import "./CreateOrder";
import "./CreateOrder.css";
import { Container, Col, Row, Badge, Form, Alert } from "react-bootstrap";
import Axios from "axios";
import LoaderComp from "../Loader/LoaderComp";
import Constants from "../constants";
import secret from "../config";
const CreateOrder = () => {
  const [date, setDate] = useState("");
  const [checked, setChecked] = useState("");
  const [company, setCompany] = useState("");
  const [guard, setGuard] = useState("");
  const [color, setColor] = useState("");
  const [temper, setTemper] = useState("");
  const [grade, setGrade] = useState("");
  const [rate, setRate] = useState("");
  const [gst, setGst] = useState("");
  const [total, setTotal] = useState(gst);
  const [coating, setCoating] = useState(0);
  const [newProduct, setNewProduct] = useState([]);
  const [checkedValue, setCheckedValue] = useState("");
  const [failureAlert, setFailureAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [isNotAvailable, setIsNotAvailable] = useState(false);
  const [value, setValue] = useState({
    feets: 0,
    inche: 0,
  });
  const [totalMM, setTotalMM] = useState(0);
  const updateHandler = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
    const newFeet = parseInt(value.feets);
    const newInches = parseInt(value.inces);
    console.log("feet:", newFeet);
    console.log("inches:", newInches);
    let result = Number(
      value.feets.typeof === isNaN
        ? 0
        : value.feets * 304.8 + value.inche.typeof === isNaN
        ? 0
        : value.inche * 25.4
    );
    setTotalMM(result);
  };

  const datemili = new Date();
  const miliseconds = datemili.getTime().toString();

  const [inputs, setInputs] = useState({
    firmName: "",
    clientName: "",
    orderId: miliseconds,
    address: "",
    city: "",
    phone_no: "",
    deliveryDate: "",
    products: newProduct,
  });
  const [desc, setDesc] = useState({
    thickness: "",
    length: "",
    width: "",
    pcs: "",
    weight: "",
    checked: "",
  });

  const inputPro = inputs.products;
  const prodctLength = inputPro.length;
  const productKey = miliseconds + "/" + `${checked}` + "/" + prodctLength;
  const product = {
    company: company,
    topcolor: color,
    select_product: checked,
    grade: grade,
    coatingnum: parseInt(coating),
    temper: temper,
    guardfilm: guard,
    thickness: parseInt(desc.thickness),
    width: parseInt(desc.width),
    length: parseInt(desc.length),
    pcs: parseInt(desc.pcs),
    weight: parseInt(desc.weight),
    gst: parseInt(total),
    rate: parseInt(rate),
    productId: productKey,
  };
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todays = dd + "/" + mm + "/" + yyyy;
  useEffect(() => {
    setDate(todays);
  }, []);
  const handleCheck = (e) => {
    e.preventDefault();
    setChecked(e.target.value);
    setCheckedValue((inputs) => {
      setCheckedValue({ ...inputs, checked });
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleDesc = (e) => {
    e.preventDefault();
    setDesc({ ...desc, [e.target.name]: e.target.value });
  };
  const handleRate = (e) => {
    e.preventDefault();
    setRate(() => {
      setRate(e.target.value);
    });
  };

  const sum = +rate * Number(18 / 100);
  const final = +sum + +rate;
  useEffect(() => {
    setTotal(() => {
      setTotal(final);
    });
    setGst(() => {
      setGst(gst);
    });
  }, [rate]);
  const handleClick = async (e) => {
    e.preventDefault();
    await Axios.get(
      `http://65.0.129.68/api/v1/sales/availableStock?product=${checked}&company=${company}&grade=${grade}&topcolor=${color}&coatingnum=${coating}&temper=${temper}&guardfilm=${guard}`,
      {
        headers: {
          Authorization: `Bearer ${secret.token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => {
        if (response.data.isAvailable === "True") {
          inputs.products.push(product);
          setNewProduct(() => {
            setNewProduct(inputs.products);
          });
          console.log(newProduct);
        } else {
          setIsNotAvailable(true);
          setTimeout(() => {
            setIsNotAvailable(false);
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formData = {
    firmName: inputs.firmName,
    clientName: inputs.clientName,
    address: inputs.address,
    orderId: inputs.orderId,
    city: inputs.city,
    phone_no: parseInt(inputs.phone_no),
    deliveryDate: inputs.deliveryDate,
    products: newProduct,
  };

  const hadnleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData);
      await Axios.post(`${secret.Ip}/sales/create`, formData, {
        headers: {
          Authorization: `Bearer ${secret.token}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => {
        setLoading(false);
        if (response.status === 201) {
          console.log(response);
          e.target.reset();
          window.scrollTo(0, 0);
          setSuccessAlert(true);
          setTimeout(() => {
            setSuccessAlert(false);
          }, 8000);
        } else {
          console.log(response);
          setFailureAlert(true);
          setTimeout(() => {
            setFailureAlert(false);
          }, 8000);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const onDeleteByIndex = (ind) => {
    const order = newProduct;
    order.splice(ind, 1);
    setNewProduct((input) => {
      setNewProduct(order);
    });
  };

  return (
    <>
      <Container className="col-xl-10 col-lg-8 col-md-12 col-sm-12">
        {/* ++++++++++++++++++++++++++ Left Div +++++++++++++++++++++++++*/}
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
              Congrats !! Orders Created SuccessFully
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
          <Col className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <Container fluid className="col-xl-8 left_main_container d-block ">
              <Container className="inside_container">
                <form onSubmit={hadnleFormSubmit}>
                  <Row>
                    <h3>Create Order</h3>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Order-iD</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-7">{inputs.orderId}</Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Date</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-7">{date}</Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Client Name</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-7">
                      <input
                        className="input_order"
                        onChange={handleChange}
                        value={inputs.clientName}
                        type="text"
                        name="clientName"
                        required
                        placeholder="Client Name"
                      />
                    </Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Firm Name</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-7">
                      <input
                        className="input_order"
                        onChange={handleChange}
                        value={inputs.firmName}
                        type="text"
                        name="firmName"
                        placeholder="Firm Name"
                        required
                        maxLength="20"
                      />
                    </Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Address</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-7">
                      <input
                        className="input_order"
                        onChange={handleChange}
                        value={inputs.address}
                        type="text"
                        name="address"
                        required
                        placeholder="Address"
                        maxLength="20"
                      />
                    </Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Phone</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-5">
                      <input
                        className="input_order"
                        onChange={handleChange}
                        value={inputs.phone_no}
                        type="number"
                        name="phone_no"
                        data-maxLength="10"
                        Placeholder="Phone No."
                        required
                        maxLength="20"
                      />

                      {inputs.phone_no.length > 1 &&
                        (inputs.phone_no.length < 10 ||
                          inputs.phone_no.length > 10) && (
                          <span style={{ color: "red" }}>
                            * Must be of 10 digits
                          </span>
                        )}
                    </Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">City</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-5">
                      {/* <input
                        className="input_order"
                        onChange={handleChange}
                        value={inputs.city}
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                      /> */}
                      <select
                        className="modal_input inputSelect"
                        aria-label="Default select example"
                        onChange={handleChange}
                        value={inputs.city}
                        name="city"
                        required
                      >
                        <option className="defaultSelect">city</option>
                        <option>Ashok Nagar</option>
                        <option>Balaghat</option>
                        <option>Betul </option>
                        <option>Bhopal </option>
                        <option>Burhanpur</option>
                        <option>Chhatarpur</option>
                        <option> Dabra </option>
                        <option> Datia </option>
                        <option> Dewas </option>
                        <option> Dhar</option>
                        <option> Fatehabad </option>
                        <option> Gwalior</option>
                        <option> Indore </option>
                        <option> Itarsi</option>
                        <option> Jabalpur</option>
                        <option> Ktani</option>
                        <option> Kotma</option>
                        <option> Lahar</option>
                        <option> Lundi</option>
                        <option> Maharajpur </option>
                        <option> Mahidpur </option>
                        <option> Maihar </option>
                        <option> Malajkhand </option>
                        <option> Manasa </option>
                        <option> Manawar</option>
                        <option> Mandideep</option>
                        <option> Mandla </option>
                        <option> Mandsaur </option>
                        <option> Mauganj </option>
                        <option> Mhow Cantonment </option>
                        <option> Mhowgaon </option>
                        <option> Morena </option>
                        <option> Multai </option>
                        <option> Murwara</option>
                        <option> Nagda</option>
                        <option> Nainpur</option>
                        <option> Narsinghgarh </option>
                        <option> Neemuch </option>
                        <option> Nepanagar </option>
                        <option> Niwari </option>
                        <option> Nowgong </option>
                        <option> Nowrozabad </option>
                        <option> Pachore </option>
                        <option> Pali</option>
                        <option> Panagar </option>
                        <option> Pandhurna </option>
                        <option> Panna</option>
                        <option> Pasan</option>
                        <option> Pipariya</option>
                        <option> Pithampur</option>
                        <option> Porsa</option>
                        <option> Prithvipur </option>
                        <option> Raghogarh-Vijaypur </option>
                        <option> Rahatgarh</option>
                        <option> Raisen </option>
                        <option> Rajgarh </option>
                        <option> Ratlam </option>
                        <option> Rau </option>
                        <option> Rehli</option>
                        <option> Rewa </option>
                        <option> Sabalgarh</option>
                        <option> Sagar </option>
                        <option> Sanawad</option>
                        <option> Sarangpur </option>
                        <option> Sarni </option>
                        <option> Satna </option>
                        <option> Sausar </option>
                        <option> Sehore </option>
                        <option> Sendhwa </option>
                        <option> Seoni </option>
                        <option> Seoni-Malwa </option>
                        <option> Shahdol </option>
                        <option> Shajapur</option>
                        <option> Shamgarh </option>
                        <option> Sheopur </option>
                        <option> Shivpuri </option>
                        <option> Shujalpur </option>
                        <option> Sidhi </option>
                        <option> Sihora </option>
                        <option> Singrauli </option>
                        <option> Sironj </option>
                        <option> Sohagpur</option>
                        <option> Tarana</option>
                        <option> Tikamgarh </option>
                        <option> Ujhani </option>
                        <option> Ujjain</option>
                        <option> Umaria</option>
                        <option> Vidisha</option>
                        <option> Wara Seoni </option>
                      </select>
                    </Col>
                  </Row>

                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Delivery Date</Col>
                    <Col className="col-lg-1">-</Col>
                    <Col className="col-lg-6">
                      <input
                        className="input_order"
                        style={{ color: "grey" }}
                        onChange={handleChange}
                        value={inputs.deliveryDate || ""}
                        type="date"
                        name="deliveryDate"
                        placeholder="dd/mm/yyyy "
                        required
                      />
                    </Col>
                  </Row>
                  <Row className="inputRow">
                    <Col className="col-lg-4 label">Products</Col>
                    <Col className="col-lg-1">-</Col>
                    <Row>
                      <Container fluid className="productContainer">
                        <Row className="ms-3">
                          <Col>
                            <Form.Check
                              className="radio"
                              type="radio"
                              aria-label="option 1"
                              label="GPC"
                              onChange={handleCheck}
                              name="checked"
                              value="GPC"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="GPS"
                              onChange={handleCheck}
                              name="checked"
                              value="GPS"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="Acce."
                              onChange={handleCheck}
                              name="checked"
                              value="Acce."
                            />
                          </Col>
                        </Row>
                        <Row className="ms-3">
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="GC"
                              onChange={handleCheck}
                              name="checked"
                              value="GC"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="HR"
                              onChange={handleCheck}
                              name="checked"
                              value="HR"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="CR"
                              onChange={handleCheck}
                              name="checked"
                              value="CR"
                            />
                          </Col>
                        </Row>
                        <Row className="ms-3">
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="Color Col"
                              onChange={handleCheck}
                              name="checked"
                              value="Color"
                            />
                          </Col>
                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="Profile Sheet"
                              onChange={handleCheck}
                              name="checked"
                              value="Profile Sheet"
                            />
                          </Col>

                          <Col>
                            <Form.Check
                              className="radio"
                              id="radio"
                              type="radio"
                              aria-label="option 1"
                              label="GP Roll"
                              onChange={handleCheck}
                              name="checked"
                              value="GP ROLL"
                            />
                          </Col>
                        </Row>
                      </Container>
                    </Row>
                  </Row>
                  <Row>
                    {/* ++++++++++++AFTER ORder section ++++++++++++ */}
                    <Container>
                      <div className="afterOrder">
                        {isNotAvailable && (
                          <div
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <span style={{ color: "red", alignSelf: "center" }}>
                              <h5>Out Of Stock</h5>
                            </span>
                          </div>
                        )}
                        <Container className="insideAfterOrder">
                          <Row>
                            <h4>
                              <Badge
                                style={{ backgroundColor: "#2D3E4D" }}
                                bg="secondary"
                              >
                                {checked ? checked : "new"}
                              </Badge>
                            </h4>
                          </Row>
                          <Row>
                            <Col>
                              <p>Product No. - {productKey}</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <select
                                className="inputSelect"
                                aria-label="Default select example"
                                defaultValue={company}
                                onChange={(e) => {
                                  setCompany(e.target.value);
                                }}
                                required
                              >
                                {Constants.Company.map((val) => (
                                  <>
                                    <option value={val.id}>{val.name}</option>
                                  </>
                                ))}
                              </select>
                            </Col>
                            <Col>
                              <select
                                className="inputSelect"
                                aria-label="Default select example"
                                defaultValue={grade}
                                onChange={(e) => {
                                  setGrade(e.target.value);
                                }}
                                required
                              >
                                {Constants.Grade.map((val) => (
                                  <>
                                    <option value={val.id}>{val.name}</option>
                                  </>
                                ))}
                              </select>
                            </Col>
                            <Col>
                              <select
                                className="inputSelect"
                                aria-label="Default select example"
                                defaultValue={color}
                                onChange={(e) => setColor(e.target.value)}
                                required
                              >
                                {Constants.Color.map((val) => (
                                  <>
                                    <option value={val.id}>{val.name}</option>
                                  </>
                                ))}
                              </select>
                            </Col>
                          </Row>
                          <Row className="mt-3">
                            <Col>
                              <select
                                className="inputSelect"
                                aria-label="Default select example"
                                onChange={(e) => setCoating(e.target.value)}
                                defaultValue={coating}
                                required
                              >
                                {Constants.Coating.map((val) => (
                                  <>
                                    <option value={val.id}>{val.name}</option>
                                  </>
                                ))}
                              </select>
                            </Col>
                            <Col>
                              <select
                                className="inputSelect"
                                aria-label="Default select example"
                                onChange={(e) => setTemper(e.target.value)}
                                defalutValue={temper}
                                required
                              >
                                {Constants.Temper.map((val) => (
                                  <>
                                    <option value={val.id}>{val.name}</option>
                                  </>
                                ))}
                              </select>
                            </Col>
                            <Col>
                              <select
                                className="inputSelect"
                                aria-label="Default select example"
                                onChange={(e) => setGuard(e.target.value)}
                                required
                              >
                                {Constants.Guard.map((val) => (
                                  <>
                                    <option value={val.id}>{val.name}</option>
                                  </>
                                ))}
                              </select>
                            </Col>
                          </Row>
                        </Container>
                        <Container className="subInputs">
                          <Container className="insideInputs">
                            <Row>
                              <Col className="m-2">
                                <Row>
                                  <label for="thickness">Thickness</label>
                                  <input
                                    type="number"
                                    name="thickness"
                                    placeholder="Thickness"
                                    className="custom_input"
                                    onChange={handleDesc}
                                    value={
                                      desc.thickness.length === 0
                                        ? ""
                                        : desc.thickness
                                    }
                                    required
                                  />
                                  {desc.thickness.length === 0 && (
                                    <span style={{ color: "red" }}>
                                      *Required
                                    </span>
                                  )}
                                </Row>
                              </Col>
                              <Col className="m-2">
                                <Row>
                                  <label>Length</label>
                                  <input
                                    type="number"
                                    name="length"
                                    placeholder="Length"
                                    className="custom_input"
                                    onChange={handleDesc}
                                    value={desc.length || ""}
                                    required
                                  />
                                  {desc.length.length === 0 && (
                                    <span style={{ color: "red" }}>
                                      *Required
                                    </span>
                                  )}
                                </Row>
                              </Col>
                              <Col className="m-2">
                                <Row>
                                  <label for="thickness">Width</label>
                                  <input
                                    type="number"
                                    placeholder="Width"
                                    className="custom_input"
                                    name="width"
                                    onChange={handleDesc}
                                    value={desc.width || ""}
                                    required
                                  />
                                  {desc.width.length === 0 && (
                                    <span style={{ color: "red" }}>
                                      *Required
                                    </span>
                                  )}
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col className="m-1">
                                <Row>
                                  <label for="pcs">Pcs.</label>
                                  <input
                                    type="number"
                                    placeholder="Pcs"
                                    name="pcs"
                                    value={desc.pcs || ""}
                                    className="subfields"
                                    onChange={handleDesc}
                                    required
                                  />
                                  {desc.pcs.length === 0 && (
                                    <span style={{ color: "red" }}>
                                      *Required
                                    </span>
                                  )}
                                </Row>
                              </Col>
                              <Col className="m-1">
                                <Row>
                                  <label for="length">Weight</label>
                                  <input
                                    type="number"
                                    placeholder="Weight"
                                    name="weight"
                                    value={desc.weight || ""}
                                    className="subfields"
                                    onChange={handleDesc}
                                    required
                                  />
                                  {desc.weight.length === 0 && (
                                    <span style={{ color: "red" }}>
                                      *Required
                                    </span>
                                  )}
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
                                <input
                                  name="rate"
                                  type="number"
                                  required
                                  value={rate || ""}
                                  onChange={handleRate}
                                  placeholder="Rate"
                                  className="subfields"
                                />
                              </Row>
                            </Col>
                            <Col className="m-3">
                              <Row>
                                <label for="thickness">Rate(GST%)</label>
                                <input
                                  type="text"
                                  value={total || ""}
                                  // onChange={handleRate}
                                  placeholder="Gst"
                                  className="subfields"
                                  readOnly
                                  maxLength="20"
                                />
                              </Row>
                            </Col>
                            <Col className="m-3">
                              <Row className="mt-3 ml-auto col-1">
                                <button
                                  className="addButton"
                                  onClick={handleClick}
                                >
                                  <i class="fas fa-plus-circle"></i>
                                </button>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </Container>
                  </Row>
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex-end",
                      margin: "30px",
                    }}
                  >
                    {newProduct?.length > 0 && (
                      <button
                        style={{
                          border: "none",
                          borderRadius: "5px",
                          backgroundColor: "#98520c",
                          color: "white",
                          padding: "10px",
                        }}
                        type="submit"
                        disable={product.length < 0 ? "true" : "false"}
                      >
                        {loading ? (
                          <LoaderComp
                            type={"TailSpin"}
                            color={"white"}
                            hidden={true}
                            height={30}
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </Container>
            </Container>
          </Col>

          {/* ++++++++++++++++++++++++++ Right Div +++++++++++++++++++++++++*/}

          <Col className="col-xl-4 col-lg-12 col-md-12 col-sm-12 right_container">
            <h3>Orders</h3>
            <Container
              fluid
              className="OrderListContainer col-xl-4 col-lg-12 col-md-12 col-sm-12 "
            >
              <div className="InsideOrderListContainer">
                <Row>
                  <Col>
                    <h6>OrderId</h6>
                  </Col>
                  <Col>
                    <h6>{inputs.orderId}</h6>
                  </Col>
                </Row>
                <Row>
                  <Row>
                    <Col>
                      <p>Client Name -</p>
                    </Col>
                    <Col>
                      <p>{inputs.clientName}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>First Name -</p>
                    </Col>
                    <Col>
                      <p>{inputs.firmName}</p>
                    </Col>
                  </Row>
                  <Col>
                    <p>Address -</p>
                  </Col>
                  <Col>
                    <p>{inputs.address}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Phone No. -</p>
                  </Col>
                  <Col>
                    <p>{inputs.phone_no}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>weight -</p>
                  </Col>
                  <Col>
                    <p>{desc.weight}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Delivery Date -</p>
                  </Col>
                  <Col>
                    <p>{inputs.deliveryDate}</p>
                  </Col>
                </Row>
              </div>
            </Container>
            <Container
              className="overflow d-grid"
              style={{ height: "100vh", boxShadow: "0px 2px 6px solid grey" }}
            >
              {newProduct ? (
                newProduct.map((val, arr) => (
                  <Container key={val.id}>
                    <div className=" afterOrder2 d-grid col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <Container className="insideAfterOrder">
                        <Row>
                          <div className="d-flex">
                            <h4>
                              <Badge
                                style={{ backgroundColor: "#2D3E4D" }}
                                bg="secondary"
                              >
                                {val.select_product}
                              </Badge>
                            </h4>
                            <div className="ms-auto d-grid">
                              <button
                                onClick={() => onDeleteByIndex(arr)}
                                className="ms-auto"
                                style={{
                                  color: "red",
                                  backgroundColor: "none",
                                  border: "none",
                                }}
                              >
                                <i class="far fa-trash-alt"></i>
                              </button>
                            </div>
                          </div>
                        </Row>
                        <Row>
                          <Col>
                            <p>Company - {val.company}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p>length - {val.length}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p>width - {val.width}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <p>weight - {val.weight}</p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Container>
                ))
              ) : (
                <p>waiting For Products</p>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateOrder;
