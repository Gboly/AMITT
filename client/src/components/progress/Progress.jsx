import { applicationStages } from "../../util/content";
import "./progress.css";

const Progress = ({ stage, goToStage }) => {
  return (
    <aside className="application-progess">
      {applicationStages.map(({ id, label }) => (
        <div
          key={id}
          className={`app-stage ${stage === id ? "active-stage" : ""}`}
        >
          <div className="item" onClick={() => goToStage(id)}>
            <div>{id}</div>
            <div>{label}</div>
          </div>
          <div className="dots">
            <div></div>
          </div>
          <div className="dots">
            <div></div>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Progress;
