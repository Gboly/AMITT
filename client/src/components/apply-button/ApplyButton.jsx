import "./apply-button.css";
import { useNavigate } from "react-router-dom";

function ApplyButton({ styleClass }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/application");
  };

  return (
    <>
      <button
        className={`apply-button ${styleClass || ""}`}
        onClick={handleClick}
      >
        Apply Now
      </button>
    </>
  );
}

export default ApplyButton;
