import { useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import FileInput from "../../components/fileInput/FileInput";
import Progress from "../../components/progress/Progress";
import Select from "../../components/select/Select";
import TextInput from "../../components/text-input/TextInput";
import {
  appStagesContent,
  fileTypes,
  personalContent,
  selectTypes,
} from "../../util/content";
import "./application.css";

const Application = () => {
  const handleInput = () => {};
  const handleChange = () => {};
  const handleSubmit = () => {};

  // Have a stage progress field in backend which would be used as initialState.
  const [stage, setStage] = useState(1);

  const goToStage = (newStage) => setStage(newStage);

  return (
    <AnimatedPage className={"application-page"}>
      <Progress stage={stage} goToStage={goToStage} />
      <CustomSection className={"application"}>
        <header>
          <h1>{"Tell Us About Yourself"}</h1>
          {/* <span>All fields are required.</span> */}
        </header>
        <form onSubmit={handleSubmit}>
          {appStagesContent[stage - 1].map(({ name, label, options }) =>
            selectTypes.includes(name) ? (
              <Select
                key={name}
                label={label}
                name={name}
                handleChange={handleInput}
                value={""}
                options={options}
              />
            ) : fileTypes.includes(name) ? (
              <FileInput
                key={name}
                handleChange={handleChange}
                name={name}
                label={label}
                value={""}
              />
            ) : (
              <TextInput
                key={name}
                {...{
                  value: "",
                  handleInput: handleInput,
                  name: name,
                  label: label,
                }}
              />
            )
          )}
          {/* <div className="form-actions">
          <button
            type="button"
            className={stage === 1 ? "disabled" : "back"}
            onClick={back}
          >
            Back
          </button>
          <button type="submit" className={!canSave ? "disabled" : ""}>
            Save & Continue
          </button>
        </div> */}
        </form>
      </CustomSection>
    </AnimatedPage>
  );
};

export default Application;
