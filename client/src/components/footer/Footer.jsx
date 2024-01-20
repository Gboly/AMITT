import "./footer.css";
import CustomSection from "../customSection/CustomSection";
import logo from "../../assets/amitt-logo.png";
import { forwardRef, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Animated from "../animated/Animated";
import { spreadOut } from "../../util/variants";
import { learnMore } from "../../util/content";

const Footer = () => {
  const footerRef = useRef(null);

  return (
    <footer className="shaded-section footer-wrap">
      <CustomSection>
        <main className="footer">
          <section className="brand-desc">
            <header>
              <img src={logo} alt="amitt brand logo" />
              <h3>AMITT Consulting Limited</h3>
            </header>
            <p>
              As a company, we recruit, train and deploy financial professionals
              to work with our worldwide clients - We strive to mould people
              into professionals ready to begin their career. We aim to close
              the gap that exists with representation for skilled minorities,
              within the finanical work place.
            </p>
          </section>
          <section className="learn-more">
            <header>Learn More</header>
            {learnMore.map((item, index) => (
              <LearnMoreOption key={index} item={item} ref={footerRef} />
            ))}
          </section>
          <section className="stay-informed">
            <header>Stay Informed</header>
            <p>
              Be the first to know about new life-changing programs, urgent
              needs, and more! Sign up to receive important updates right to
              your inbox.
            </p>
            <SubscriptionForm />
          </section>
        </main>
      </CustomSection>
    </footer>
  );
};

const LearnMoreOptionWithRef = ({ item: { desc, url } }, ref) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <NavLink to={url}>
        {desc}
        <AnimatePresence>
          {isHovering && (
            <Animated
              element={motion.div}
              className={"active-bar"}
              ref={ref}
              variants={spreadOut()}
            />
          )}
        </AnimatePresence>
      </NavLink>
    </div>
  );
};
const LearnMoreOption = forwardRef(LearnMoreOptionWithRef);

const SubscriptionForm = () => {
  const nameRef = useRef(null);

  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e && e.preventDefault();
  };
  const handleInput = (e) => {
    const { id, value } = e.target;
    setUserDetails({ ...userDetails, [id]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={userDetails.name}
        onInput={handleInput}
        ref={nameRef}
      />
      <input
        type="email"
        id="email"
        placeholder="Your Email"
        value={userDetails.email}
        onInput={handleInput}
      />
      <button type="submit">KEEP ME INFORMED</button>
    </form>
  );
};

export default Footer;
