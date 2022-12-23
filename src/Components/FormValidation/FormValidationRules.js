export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.clientName) {
    errors.clientName = "ClientName is required";
  } else if (values.clientName.length < 8) {
    errors.clientName = "ClientName must be 8 or more characters";
  }
  if (!values.firmName) {
    errors.firmName = "firmName is required";
  } else if (values.firmName.length < 8) {
    errors.firmName = "firmName must be 8 or more characters";
  }
  if (values.phone_no === isNaN) {
    errors.phone_no = "Must Be a Number";
  } else if (values.phone_no.length < 8) {
    errors.phone_no = "Phone Number must be of 10 digits!";
  } else if (!values.phone_no) {
    errors.phone_no = "Phone Number is required";
  }
  return errors;
}
