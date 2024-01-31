import "./successful.css";
import AnimatedPage from "../animated/AnimatedPage";
import VerifiedIcon from "@mui/icons-material/Verified";
import Icon from "../icon/Icon";
import ConfettiExplosion from "react-confetti-explosion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Successful = () => {
  const navigate = useNavigate();
  const [isConfetti, setIsConfetti] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsConfetti(false), 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatedPage className={"successful-application"}>
      {isConfetti && (
        <aside>
          <ConfettiExplosion duration={5000} width={5000} particleCount={250} />
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
          <button onClick={() => navigate("/")}>Go to Home page</button>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Successful;
