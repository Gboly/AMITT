import "./customSection.css";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { vSlideInBottom } from "../../util/variants";
import { forwardRef } from "react";

const CustomSectionWithRef = ({ children, header, className }, ref) => {
  return (
    <section
      ref={ref}
      className={`reference-container section ${className || ""}`}
    >
      <div>
        {ref && (
          <Animated
            element={motion.header}
            variants={vSlideInBottom({ duration: 0.5, delay: 0.2 })}
            ref={ref}
          >
            {header}
            {/* <div className="active-bar"></div> */}
          </Animated>
        )}
        {children}
      </div>
    </section>
  );
};

const CustomSection = forwardRef(CustomSectionWithRef);
export default CustomSection;
