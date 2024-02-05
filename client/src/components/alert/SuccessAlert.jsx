import { Alert } from "@mui/material";
import "./success-alert.css";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { reveal } from "../../util/variants";

const SuccessAlertWithRef = ({ message, handleClose }, ref) => {
  return (
    <Animated
      element={motion.div}
      ref={ref}
      variants={reveal()}
      className="confirmation-alert"
    >
      <Alert
        severity="success"
        onClose={handleClose}
        sx={{
          padding: "1rem 1.5rem",
          boxSizing: "border-box",
          backgroundColor: "rgb(148, 241, 144)",
          fontSize: "var(--p2)",
          fontFamily: "var(--choice-font)",
          borderRadius: "0.5rem",
        }}
      >
        {message}
      </Alert>
    </Animated>
  );
};

const SuccessAlert = forwardRef(SuccessAlertWithRef);
export default SuccessAlert;
