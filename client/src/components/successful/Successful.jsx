import "./successful.css";
import AnimatedPage from "../animated/AnimatedPage";
import VerifiedIcon from "@mui/icons-material/Verified";
import Icon from "../icon/Icon";
import ConfettiExplosion from "react-confetti-explosion";
import { useEffect, useState } from "react";

const Successful = () => {
  const [isConfetti, setIsConfetti] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setIsConfetti(true), 500);
    const timeout2 = setTimeout(() => setIsConfetti(false), 3500);

    const clear = () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };

    return () => clear();
  }, []);

  return (
    <AnimatedPage className={"successful-application"}>
      {isConfetti && (
        <aside>
          <ConfettiExplosion duration={3000} width={5000} particleCount={250} />
        </aside>
      )}
      <div>
        <section>
          <Icon
            value={VerifiedIcon}
            size={3.5}
            style={{ color: "var(--success-color" }}
          />
          <header>Application Successful</header>
          <p>
            Your application has been submitted. Our Team would conduct a review
            and would reach out to you on outcome and next steps.
          </p>
          <button onClick={() => (window.location.href = "/")}>
            Go to Home page
          </button>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Successful;
