import React from "react";
import PropTypes from "prop-types";
import S from "./Notification.module.css";

const Notification = ({ message }) => (
  <p className={S.notification}>{message}</p>
);

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
