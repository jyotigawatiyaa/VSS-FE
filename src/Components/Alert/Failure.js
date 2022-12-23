import React from "react";
import { Alert } from "react-bootstrap";

const Failure = ({ variant, message, show }) => {
  return (
    <Alert show={show} variant={variant}>
      {message}
    </Alert>
  );
};

export default Failure;
