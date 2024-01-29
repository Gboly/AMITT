import { applicationStages } from "../../util/content";
import "./progress.css";

const Progress = ({ stage, goToStage, completedStages }) => {
  const isCompleted = (id) =>
    completedStages?.some(({ stage: completedStage }) => completedStage === id);

  return (
    <aside className="application-progess">
      {applicationStages.map(({ id, label }) => (
        <div
          key={id}
          className={`app-stage ${
            stage === id
              ? "active-stage"
              : isCompleted(id)
              ? "completed-stage"
              : ""
          }`}
        >
          <div className="item" onClick={() => goToStage && goToStage(id)}>
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
