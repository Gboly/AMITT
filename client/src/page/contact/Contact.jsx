import AnimatedPage from "../../components/animated/AnimatedPage";
import "./contact.css";
import contactUs from "../../assets/contact.png";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import Icon from "../../components/icon/Icon";
import { NavLink, useSearchParams } from "react-router-dom";
import CustomSection from "../../components/customSection/CustomSection";
import { useEffect, useMemo, useRef, useState } from "react";
import { customMessageDetails } from "../../util/content";
import TextInput from "../../components/text-input/TextInput";
import SuccessAlert from "../../components/alert/SuccessAlert";
import { useSendMessageMutation } from "../../app/contactApiSlice";
import Spinner from "../../components/spinner/Spinner";
import { scroller } from "react-scroll";

const initialState = customMessageDetails.reduce((accum, { name }) => {
  accum = { ...accum, [name]: "" };
  return accum;
}, {});

const Contact = () => {
  const contactRef = useRef(null);
  const [details, setDetails] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);

  const [query] = useSearchParams();

  const [send, { data, isLoading }] = useSendMessageMutation();

  const handleInput = (e) => {
    setDetails((current) => ({ ...current, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    data && setIsSuccess(true);
  }, [data]);

  useEffect(() => {
    const isFromFaq = query.get("question");
    isFromFaq &&
      scroller.scrollTo("custom-message", { smooth: true, delay: 400 });
  }, [query]);

  const canSubmit = useMemo(() => {
    const { firstName, email, message } = details;
    const required = [firstName, email, message];
    return required.every((value) => value);
  }, [details]);

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    canSubmit && send(details);
  };

  const handleClose = () => setIsSuccess(false);

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
        name="custom-message"
      >
        <form onSubmit={handleSubmit}>
          {customMessageDetails.map(({ name, label }) => (
            <TextInput
              key={name}
              {...{ name, label, value: details[name], handleInput }}
            />
          ))}
          <div className="submit" name="custom-message">
            {isLoading ? (
              <Spinner />
            ) : (
              <button type="submit" className={!canSubmit ? "disabled" : ""}>
                Submit
              </button>
            )}
          </div>
        </form>
      </CustomSection>

      {/* Alert */}
      {isSuccess && (
        <SuccessAlert
          ref={contactRef}
          message={"Message sent successfully."}
          handleClose={handleClose}
        />
      )}
    </AnimatedPage>
  );
};

export default Contact;
