import { motion, useAnimation } from "framer-motion";
import { pageExit, pageVariant } from "../../util/variants";
import { useEffect } from "react";

const AnimatedPage = ({ children, className }) => {
  const control = useAnimation();

  useEffect(() => {
    control.start("final");
  }, [className, control]);

  return (
    <motion.main
      className={className}
      variants={pageVariant()}
      initial={"initial"}
      animate={control}
      exit={pageExit}
    >
      {children}
    </motion.main>
  );
};

export default AnimatedPage;
