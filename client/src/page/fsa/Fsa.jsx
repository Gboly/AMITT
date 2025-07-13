import { useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import "./fsa.css";
import CustomSection from "../../components/customSection/CustomSection";
import VideoPlayer from "../../components/video-player/VideoPlayer";
import TextInput from "../../components/text-input/TextInput";

const banners = [
  {
    size: "lg",
    src: "https://res.cloudinary.com/dirwr8cde/image/upload/v1752337022/Amitt/fsa_iarmea.gif",
  },
  {
    size: "md",
    src: "https://res.cloudinary.com/dirwr8cde/image/upload/v1752339236/Amitt/fsa-md_c3p5ux.gif",
  },
];

const Fsa = () => {
  const fsaRef = useRef(null);

  const [email, setEmail] = useState("");
  const [joined, setjoined] = useState(false);

  const handleInput = (e) => {
    setEmail(e.target.value);
  };
  const handleJoin = () => {
    if (email) {
      setjoined(true);
      setEmail("");
    }
  };
  const handleClose = () => {
    setjoined(false);
  };

  return (
    <AnimatedPage className={"fsa"}>
      <section className="intro">
        {banners.map(({ size, src }) => (
          <img
            key={size}
            className={`fsa-banner-${size}`}
            src={src}
            alt="A finance graphic"
          />
        ))}
        <CustomSection
          header={"welcome to the financial stewardship academy"}
          ref={fsaRef}
        >
          <p className="intro-desc">
            Are you ready to break free from financial uncertainty and step into
            a life of clarity, confidence, and control? The Financial
            Stewardship Academy, powered by Amitt Consulting Limited, is your
            gateway to mastering money management and unlocking true financial
            freedom.
          </p>
          <p className="intro-desc">
            This isn’t just another finance course — it’s a transformational
            experience. Through expert-led sessions, real-world strategies, and
            actionable insights, you’ll learn how to make smart money moves,
            build lasting savings habits, invest wisely, and develop a financial
            mindset that sets you apart.
          </p>
          <p className="intro-desc">
            Whether you’re starting your financial journey or looking to take it
            to the next level, the Academy equips you with the tools, knowledge,
            and community support you need to grow and thrive.
          </p>
          <p className="intro-desc">
            Listen to what the CEO of Amitt Consulting has to say about this
            program:
          </p>
          <VideoPlayer
            src={
              "https://res.cloudinary.com/dirwr8cde/video/upload/v1752341486/Amitt/video_2025-07-12_18-30-01_ob544a.mp4"
            }
            poster={
              "https://res.cloudinary.com/dirwr8cde/image/upload/v1752343488/Amitt/fsa-video-poster_whmk4r.png"
            }
          />
          <p className="intro-desc apply-desc">
            Getting started is as simple as providing your email address
          </p>
          <div className="fsa-apply">
            <TextInput
              value={email}
              handleInput={handleInput}
              name={"email"}
              //label={""}
              placeholder={"Email Address"}
            />
            <button className={!email ? "disabled" : ""} onClick={handleJoin}>
              Get Started
            </button>
          </div>
          {joined && <Joined handleClose={handleClose} />}
        </CustomSection>
      </section>
    </AnimatedPage>
  );
};

const Joined = ({ handleClose }) => {
  return (
    <div className="joined">
      <div>
        <div onClick={handleClose}>X</div>
        <h1>Congratulations! 🎉</h1>
        <p>
          You have successfully applied to join the financial stewardship
          academy.
        </p>
        <p>You would be contacted through mail for further actions</p>
      </div>
    </div>
  );
};

export default Fsa;
