import React, { useState, useEffect } from "react";
import "./Purchase.css";
import { Container, Col, Row, Alert, Badge } from "react-bootstrap";
import { useHistory } from "react-router";
import Axios from "axios";
import LoaderComp from "../Loader/LoaderComp";
import Constants from "../constants";

const Purchase_Order = (props) => {
  const history = useHistory();
  const [company, setCompany] = useState("");
  const [coating, setCoating] = useState(0);
  const [guard, setGuard] = useState("");
  const [color, setColor] = useState("");
  const [temper, setTemper] = useState("");
  const [grade, setGrade] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [newProducts, setNewProducts] = useState([]);
  const [failureAlert, setFailureAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(0);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState("");
  // const [, setOrders] = useState([newProducts]);

  const [inputs, setInputs] = useState({
    vendor: "",
    firmName: "",
    clientName: "",
    email: "",
    phone_no: "",
    address: "",
    city: "",
    note: "",
    deliveryDate: "",
    products: [],
  });

  const [num, setNum] = useState({
    thickness: 0,
    width: 0,
    length: 0,
    weight: 0,
    pcs: 0,
  });

  const sum = +rate * Number(18 / 100);
  const final = +sum + +rate;

  useEffect(() => {
    setTotal(() => {
      setTotal(final);
    });
    setGst(() => {
      setGst(gst);
    });
  }, [rate, final, gst]);

  const product = {
    select_product: selectProduct,
    company: company,
    topcolor: color,
    grade: grade,
    coatingnum: parseInt(coating),
    temper: temper,
    guardfilm: guard,
    thickness: parseInt(num.thickness),
    width: parseInt(num.width),
    length: parseInt(num.length),
    pcs: parseInt(num.pcs),
    weight: parseInt(num.weight),
    gst: parseInt(total),
    rate: parseInt(rate),
  };

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const todays = dd + "/" + mm + "/" + yyyy;

  const formData = {
    orderdate: todays,
    vendor: inputs.vendor,
    firmName: inputs.firmName,
    clientName: inputs.clientName,
    email: inputs.email,
    phone_no: parseInt(inputs.phone_no),
    address: inputs.address,
    city: inputs.city,
    note: inputs.notes,
    deliveryDate: inputs.deliveryDate,
    products: inputs.products,
  };
  const addProducts = (e) => {
    e.preventDefault();
    inputs.products.push(product);
    // console.log(inputs.products);
    setNewProducts((input) => {
      setNewProducts(inputs.products);
    });
    console.log(inputs.products);
  };
  const onDeleteByIndex = (ind) => {
    const order = newProducts;
    order.splice(ind, 1);
    setNewProducts((input) => {
      setNewProducts(order);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await Axios.post("http://65.0.129.68/api/v1/purchaseStock/create", formData)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSuccessAlert(true);
          e.target.reset();
          window.scrollTo(0, 0);
          //-------------------------------
          history.push(`./purchase`);
          //---------------------------
        } else {
          setFailureAlert(true);
          setTimeout(() => {
            setFailureAlert(false);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setFailureAlert(true);
        setTimeout(() => {
          setFailureAlert(false);
        }, 3000);
      });
  };

  const handleNum = (e) => {
    e.preventDefault();
    setNum({ ...num, [e.target.name]: e.target.value });
  };
  const handleInput = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const output = newProducts ? (
    newProducts?.map((val, ind, arr) => (
      <Container key={ind}>
        <div className="afterOrder">
          <Container className="insideAfterOrder">
            <Row>
              <div className="d-flex">
                <h4>
                  <Badge style={{ backgroundColor: "#2D3E4D" }} bg="secondary">
                    {val.select_product}
                  </Badge>
                </h4>

                <div className="ms-auto">
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
                <label>Company</label>
                <div className="inputSelect p-2">
                  <p>{val.company}</p>
                </div>
              </Col>
              <Col>
                <Col>
                  <label>Grade</label>
                  <div className="inputSelect p-2">
                    <p>{val.grade}</p>
                  </div>
                </Col>
              </Col>
              <Col>
                <Col>
                  <label>Top Color</label>
                  <div className="inputSelect p-2">
                    <p>{val.topcolor}</p>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <label>Coating</label>
                <div className="inputSelect p-2">
                  <p>{val.coatingnum}</p>
                </div>
              </Col>
              <Col>
                <label>Temper</label>
                <div className="inputSelect p-2">
                  <p>{val.temper}</p>
                </div>
              </Col>
              <Col>
                <label>Guard</label>
                <div className="inputSelect p-2">
                  <p>{val.guardfilm}</p>
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
                      <p>{val.thickness}</p>
                    </div>
                  </Row>
                </Col>
                <Col className="m-2">
                  <Row>
                    <label>Length</label>
                    <div className="custom_input pl-2 pt-1">
                      <p>{val.length}</p>
                    </div>
                  </Row>
                </Col>
                <Col className="m-2">
                  <Row>
                    <label>width</label>
                    <div className="custom_input pl-2 pt-1">
                      <p>{val.width}</p>
                    </div>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="m-1">
                  <Row>
                    <label>Pcs</label>
                    <div className="custom_input pl-2 pt-1">
                      <p>{val.pcs}</p>
                    </div>
                  </Row>
                </Col>
                <Col className="m-1">
                  <Row>
                    <label>Weight</label>
                    <div className="custom_input pl-2 pt-1">
                      <p>{val.weight}</p>
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
                    <p>{val.rate}</p>
                  </div>
                </Row>
              </Col>
              <Col className="m-3">
                <Row>
                  <label for="thickness">Rate(GST%)</label>
                  <div className="custom_input pl-2 pt-1">
                    <p>{val.gst}</p>
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
      </Container>
    ))
  ) : (
    <h4>Add Some Products</h4>
  );
  return (
    <>
      <Container className="purchase_order_main">
        <h4 className="mt-4" style={{ color: "grey" }}>
          Purchase Order
        </h4>
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
              Purchase Created SuccessFully
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
              Something Went Worng Please fill the form correctly...
            </Alert>
          </div>
        </Row>
        <Row>
          <Col>
            <Container className="purchase_form_container d-grid p-2">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Row>
                  <>
                    <Container className="mt-4">
                      {/* Input */}
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Vendore
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Vendor Name"
                            type="text"
                            required
                            name="vendor"
                            onChange={handleInput}
                            value={inputs.vendor}
                            maxLength="20"
                          />
                        </Col>
                      </Row>
                      {/* Input */}
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Firm Name
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Firm Name"
                            type="text"
                            required
                            name="firmName"
                            onChange={handleInput}
                            value={inputs.firmName}
                            maxLength="20"
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Client Name
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Client Name"
                            type="text"
                            required
                            name="clientName"
                            onChange={handleInput}
                            value={inputs.clientName}
                            maxLength="20"
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Email
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Email"
                            type="email"
                            required
                            name="email"
                            onChange={handleInput}
                            value={inputs.email}
                            maxLength="40"
                            // pattern="/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/"
                            pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Phone
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Phone"
                            type="number"
                            required
                            name="phone_no"
                            onChange={handleInput}
                            value={inputs.phone_no}
                            maxLength="10"
                          />
                          <div>
                            {inputs.phone_no.length > 1 &&
                              (inputs.phone_no.length < 10 ||
                                inputs.phone_no.length > 10) && (
                                <span style={{ color: "red" }}>
                                  * Must be of 10 digits
                                </span>
                              )}
                          </div>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          City
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          {/* <input
                            className="input_fields"
                            placeholder="City"
                            type="text"
                            required
                            name="city"
                            onChange={handleInput}
                            value={inputs.city}
                            maxLength="20"
                          /> */}

                          <select
                            className="form-select modals_input  "
                            aria-label="Default select example"
                            onChange={handleInput}
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
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Address
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Address"
                            type="text"
                            required
                            name="address"
                            onChange={handleInput}
                            value={inputs.address}
                            maxLength="40"
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Deliver Date
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Deliver Date"
                            type="date"
                            required
                            name="deliveryDate"
                            onChange={handleInput}
                            value={inputs.deliveryDate}
                            maxLength="20"
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Note
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Note"
                            type="text"
                            required
                            name="note"
                            onChange={handleInput}
                            value={inputs.note}
                            maxLength="40"
                          />
                        </Col>
                      </Row>
                    </Container>
                  </>
                  <Row>
                    <h4 style={{ color: "grey" }}> Add Products</h4>
                  </Row>
                  <>
                    <Container className="mt-4">
                      {/* Input */}
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Rate
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <div
                            className="d-flex input_fields"
                            style={{ width: "60%" }}
                          >
                            <input
                              style={{ border: "none", outlineStyle: "none" }}
                              placeholder="Rate"
                              type="number"
                              name="rate"
                              min="0"
                              value={rate || ""}
                              onChange={(e) => {
                                setRate(e.target.value);
                              }}
                              required
                            />
                            <i class="fas fa-rupee-sign"></i>
                          </div>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          GST
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <div
                            className="d-flex input_fields"
                            style={{ width: "60%" }}
                          >
                            <input
                              style={{ border: "none", outlineStyle: "none" }}
                              placeholder="GST"
                              type="text"
                              value={total || ""}
                              required
                              readOnly
                            />
                            <i class="fas fa-rupee-sign"></i>
                          </div>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Select Product
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
                            defaultValue={selectProduct}
                            onChange={(e) => setSelectProduct(e.target.value)}
                            required
                          >
                            {Constants.Product.map((val) => (
                              <>
                                <option value={val.id}>{val.name}</option>
                              </>
                            ))}
                          </select>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Select Company
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
                            defaultValue={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                          >
                            {Constants.Company.map((val) => (
                              <>
                                <option value={val.id}>{val.name}</option>
                              </>
                            ))}
                          </select>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Coating
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
                            defaultValue={coating}
                            onChange={(e) => setCoating(e.target.value)}
                            required
                          >
                            {Constants.Coating.map((val) => (
                              <>
                                <option value={val.id}>{val.name}</option>
                              </>
                            ))}
                          </select>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Guard Film
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
                            defaultValue={guard}
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
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Temper
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
                            defaultValue={temper}
                            onChange={(e) => setTemper(e.target.value)}
                            required
                          >
                            {Constants.Temper.map((val) => (
                              <>
                                <option value={val.id}>{val.name}</option>
                              </>
                            ))}
                          </select>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Grade
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
                            defaultValue={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            required
                          >
                            {Constants.Grade.map((val) => (
                              <>
                                <option value={val.id}>{val.name}</option>
                              </>
                            ))}
                          </select>
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Top Color
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <select
                            className="input_fields"
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
                      {/* Input */}
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Thickness
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Thickness"
                            type="number"
                            min="0"
                            name="thickness"
                            value={num.thickness || ""}
                            onChange={handleNum}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Width
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Width"
                            type="number"
                            name="width"
                            min="0"
                            value={num.width || ""}
                            onChange={handleNum}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Length
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Length"
                            type="number"
                            name="length"
                            min="0"
                            value={num.length || ""}
                            onChange={handleNum}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Weight
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Weight"
                            type="number"
                            min="0"
                            name="weight"
                            value={num.weight || ""}
                            onChange={handleNum}
                            required
                          />
                        </Col>
                      </Row>
                      <Row className="col-lg-12 col-md-12 col-sm-12 col-xl-12 mb-2">
                        <Col className="col-lg-4 col-xs-4 col-sm-4 col-md-4 col-xl-4">
                          Pcs
                        </Col>
                        <Col className="col-lg-1 col-xs-1 col-md-1 col-sm-1 col-xl-1">
                          -
                        </Col>
                        <Col className="col-lg-7 col-xs-7 col-md-7 col-sm-7 col-xl-7">
                          <input
                            className="input_fields"
                            placeholder="Pcs"
                            type="number"
                            min="0"
                            required
                            name="pcs"
                            value={num.pcs || ""}
                            onChange={handleNum}
                          />
                        </Col>
                      </Row>
                      <Row
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                          width: "25%",
                          marginTop: "20px",
                          marginBottom: "50px",
                        }}
                      >
                        <button
                          onClick={addProducts}
                          style={{
                            border: "none",
                            backgroundColor: "#98520c",
                            borderRadius: "5px",
                            boxShadow: "0px 2px 6px light",
                            color: "white",
                            outlineStyle: "none",
                            padding: "10px",
                          }}
                        >
                          Add Product
                        </button>
                      </Row>
                    </Container>
                  </>
                </Row>
                <Row
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "25%",
                  }}
                >
                  <button
                    className="me-auto"
                    type="submit"
                    style={{
                      border: "none",
                      backgroundColor: "#98520c",
                      borderRadius: "5px",
                      boxShadow: "0px 2px 6px light",
                      color: "white",
                      outlineStyle: "none",
                      padding: "10px",
                    }}
                  >
                    {loading ? (
                      <LoaderComp
                        type={"Circles"}
                        hidden={true}
                        height={30}
                        color={"white"}
                      />
                    ) : (
                      "Purchase"
                    )}
                  </button>
                </Row>
              </form>
            </Container>
          </Col>
          <Col>
            <p>List Purchase</p>
            {output}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Purchase_Order;
