import { useMemo, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import FileInput from "../../components/fileInput/FileInput";
import Progress from "../../components/progress/Progress";
import Select from "../../components/select/Select";
import TextInput from "../../components/text-input/TextInput";
import {
  appStagesContent,
  fileTypes,
  headers,
  selectTypes,
} from "../../util/content";
import "./application.css";
import { getInitialInfo } from "../../util/function";

const Application = () => {
  // Have a stage progress field in backend which would be used as initialState.
  const [stage, setStage] = useState(1);
  const goToStage = (newStage) => setStage(newStage);

  const [data, setData] = useState(
    stage !== 7 ? getInitialInfo(appStagesContent[stage - 1]) : {}
  );

  const handleInput = (e, value) => {
    setData((currentData) => ({
      ...currentData,
      [e.target?.id || e.target?.name]: value || e.target.value,
    }));
  };

  const handleChange = () => {};
  const handleSubmit = () => {};

  const [canSave, isSubmitStage] = useMemo(
    () => [Object.values(data).every((value) => value), stage === 7],
    [data, stage]
  );

  // const next = () => {
  //   // stage === 3 ? show confirmation page (no navigation. use state to render)

  //   // Saving
  //   stage === 3 ? console.log("done") : setStage(stage + 1);
  // };
  const back = () => {
    setStage(stage - 1);
  };

  return (
    <AnimatedPage className={"application-page"}>
      <Progress stage={stage} goToStage={goToStage} />
      <CustomSection className={"application"}>
        <header>
          <h1>{headers[stage - 1]}</h1>
          {/* <span>All fields are required.</span> */}
        </header>
        <form onSubmit={handleSubmit}>
          {!isSubmitStage ? (
            appStagesContent[stage - 1].map(({ name, label, options }) =>
              selectTypes.includes(name) ? (
                <Select
                  key={name}
                  label={label}
                  name={name}
                  handleChange={handleInput}
                  value={data?.[name] || ""}
                  options={options}
                />
              ) : fileTypes.includes(name) ? (
                <FileInput
                  key={name}
                  handleChange={handleChange}
                  name={name}
                  label={label}
                  value={data?.[name] || ""}
                />
              ) : (
                <TextInput
                  key={name}
                  {...{
                    value: data?.[name] || "",
                    handleInput: handleInput,
                    name: name,
                    label: label,
                  }}
                />
              )
            )
          ) : (
            <div className="terms">
              <p>
                By clicking the submit button below, I certify that all of the
                information provided by me on this application is true and
                complete, and I understand that if any false information,
                ommissions, or misrepresentations are discovered, my application
                may be rejected, if I am accepted to be trained, the offer could
                be terminated, and if I am employed, the offer could also be
                terminated at any time.
              </p>
              <p>{`In consideration of my employment, I agree to conform to the company's rules and regulations, and I agree that my employment can be terminated, with or without cause, and with or without notice, at any time, at either my or the company's option.
              I also understand and agree that the terms and conditions of my employment may be changed, with or without cause, and with or without notice, at any time by the company.`}</p>
            </div>
          )}
          <div className="form-actions">
            <button
              type="button"
              className={stage === 1 ? "disabled" : "back"}
              onClick={back}
            >
              Back
            </button>
            <button type="submit" className={!canSave ? "disabled" : ""}>
              {isSubmitStage ? "Submit Application" : "Save & Continue"}
            </button>
          </div>
        </form>
      </CustomSection>
    </AnimatedPage>
  );
};

export default Application;
