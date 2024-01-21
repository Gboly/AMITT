import AnimatedPage from "../../components/animated/AnimatedPage";
import "./contact.css";
import contactUs from "../../assets/contact.png";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Icon from "../../components/icon/Icon";
import { NavLink } from "react-router-dom";
import CustomSection from "../../components/customSection/CustomSection";
import { useRef, useState } from "react";
import { customMessageDetails } from "../../util/content";
import TextInput from "../../components/text-input/TextInput";

const initialState = customMessageDetails.reduce((accum, { name }) => {
  accum = { ...accum, [name]: "" };
  return accum;
}, {});

const Contact = () => {
  const contactRef = useRef(null);
  const [details, setDetails] = useState(initialState);

  const handleInput = (e) => {
    setDetails((current) => ({ ...current, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
  };

  return (
    <AnimatedPage className={"contact"}>
      <section className="intro">
        <img src={contactUs} alt="" />
        <div>
          <div>
            <header>Get In Touch</header>
            <p>
              {
                "Whether you're a talented professional or a company seeking the right fit, our team is ready to connect and guide you. Your journey begins with a simple message or call—let's embark on this transformative path together."
              }
            </p>
            <aside>
              <div>
                <Icon value={CallIcon} />
                <NavLink to={"tel:+447519280650"}>+447519280650</NavLink>
              </div>
              <div>
                <Icon value={MailIcon} />
                <NavLink to={"mailto:info@amittconsulting.co.uk"}>
                  info@amittconsulting.co.uk
                </NavLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CustomSection
        header={"Send Us A Message"}
        ref={contactRef}
        className={"custom-message"}
      >
        <form onSubmit={handleSubmit}>
          {customMessageDetails.map(({ name, label }) => (
            <TextInput
              key={name}
              {...{ name, label, value: details[name], handleInput }}
            />
          ))}
          <div className="submit" name="custom-message">
            <button type="submit">Submit</button>
          </div>
        </form>
      </CustomSection>
    </AnimatedPage>
  );
};

export default Contact;
