import React, { useState } from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Alert } from "react-bootstrap";
import { Route, useHistory } from "react-router-dom";
import LoaderComp from "../Loader/LoaderComp";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "20ch",
      margin: "50px",
    },
  },
}));

const Login = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: info.username,
      password: info.password,
    };
    setLoading(true);
    setTimeout(async () => {
      await axios
        .post("http://65.0.129.68/api/v1/admin", userData)
        .then((response) => {
          if (response.data.status === "true") {
            localStorage.setItem("token", response.data.data.token);
            console.log(response.data.data);
            setIsAuth(true);
            history.push("/web-front");
          } else {
            setLoading(false);
            setError(true);
          }
          setTimeout(() => {
            setError(false);
          }, 3000);
        });
    }, 2000);
  };

  const classes = useStyles();

  return (
    <>
      <Route>
        <Container className="Login_Container">
          <Alert
            show={error}
            variant="danger"
            onClose={() => setError(false)}
            style={{ width: "100%", height: "auto" }}
          >
            Ooops! UserName Or Password Did not Match
          </Alert>
          <Container className="Login_back_image">
            <Container className="form_container">
              <form
                onSubmit={handleSubmit}
                className={classes.root}
                autoComplete="off"
              >
                <div>
                  <TextField
                    label="Username"
                    variant="outlined"
                    value={info.username}
                    onChange={handleChange}
                    name="username"
                    required
                  />
                </div>

                <div>
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={info.password}
                    onChange={handleChange}
                    required
                    className="text_field"
                  />
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <button className="btn btn-submit btn-div" type="submit">
                    {Loading ? (
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
                </div>
              </form>
            </Container>
          </Container>
        </Container>
      </Route>

      {/* <ProtectedRoute
        exact
        path="/dashboard"
        component={Dashboard}
        isAuth={isAuth}
      /> */}
    </>
  );
};

export default Login;
