import React from "react";
import { Alert } from "react-bootstrap";
const Success = ({ success }) => {
  return <Alert variant="Success"> {success}</Alert>;
};

export default Success;
