import "./apply-button.css";
import { motion } from "framer-motion";
import { forwardRef, useContext } from "react";
//import { GeneralContext } from "../../App";

function ApplyButtonWithRef({ styleClass, variants }, ref) {
  //   const { navigateToSection } = useContext(GeneralContext);

  //   const handleClick = () => {
  //     navigateToSection("Donate today");
  //   };

  return (
    <>
      <button
        className={`apply-button ${styleClass || ""}`}
        //onClick={handleClick}
      >
        Apply Now
      </button>
    </>
  );
}

const ApplyButton = forwardRef(ApplyButtonWithRef);
export default ApplyButton;
