import { forwardRef, useEffect, useRef } from "react";
import "./sidebar.css";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { hSlideInRight } from "../../util/variants";
import { navOptions } from "../../util/content";
import { useNavigate } from "react-router-dom";

const SidebarWithRef = ({ closeSidebar }, ref) => {
  const sidebarInViewRef = useRef(null);
  const setElementRef = (elementNode) =>
    elementNode && (ref.current = elementNode);
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
    closeSidebar();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <aside className="reference-container" id="sidebar" ref={sidebarInViewRef}>
      <Animated
        element={motion.div}
        ref={sidebarInViewRef}
        className="sidebar"
        variants={hSlideInRight({ duration: 0.6 })}
        setElementRef={setElementRef}
        animateExit={true}
      >
        <main>
          {navOptions.map(({ desc, url }) => (
            <section key={desc}>
              <header onClick={() => handleClick(url)}>{desc}</header>
            </section>
          ))}
        </main>
      </Animated>
    </aside>
  );
};

const Sidebar = forwardRef(SidebarWithRef);
export default Sidebar;
