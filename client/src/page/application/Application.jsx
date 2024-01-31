import { useEffect, useMemo, useState } from "react";
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
  notRequiredFields,
  selectTypes,
  terms1,
  terms2,
} from "../../util/content";
import "./application.css";
import { useDispatch, useSelector } from "react-redux";
import {
  applySavedValues,
  getDataByStage,
  inputValue,
  setIsSuccess,
} from "../../app/applicationSlice";
import { applicationId, canSubmit, nextStage } from "../../util/function";
import {
  useCreateApplicationMutation,
  useGetApplicationQuery,
} from "../../app/applicationApiSlice";
import Spinner from "../../components/spinner/Spinner";

// const fileInitialState = { resume: "", coverLetter: "" };
const Application = () => {
  const dispatch = useDispatch();

  const { data: applicationDetails, isLoading } = useGetApplicationQuery(
    applicationId,
    { skip: !applicationId }
  );
  const [
    saveProgressByStage,
    { isLoading: savingProgress, data: progressDetails },
  ] = useCreateApplicationMutation();

  // Have a stage progress field in backend which would be used as initialState.
  const [stage, setStage] = useState(0);
  const data = useSelector((state) => getDataByStage(state, stage));
  // const [{ resume, coverLetter }, setFileValue] = useState(fileInitialState);

  useEffect(() => {
    applicationDetails && dispatch(applySavedValues(applicationDetails));
  }, [applicationDetails, dispatch]);

  const goToStage = (newStage) => {
    setStage(newStage);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    !isLoading &&
      goToStage(
        nextStage(
          (progressDetails || applicationDetails)?.completedStages || []
        )
      );

    const lastStage =
      progressDetails?.completedStages[
        progressDetails?.completedStages?.length - 1
      ]?.stage;
    lastStage === 7 && dispatch(setIsSuccess(true));
  }, [applicationDetails, progressDetails, isLoading, dispatch]);

  const handleInput = (e, value) => {
    dispatch(
      inputValue({
        key: e.target?.id || e.target?.name,
        value: value || e.target.value,
      })
    );
  };

  const handleChange = () => {};

  const [canSave, isSubmitStage] = useMemo(
    () => [
      stage === 7
        ? canSubmit(applicationDetails, progressDetails)
        : Object.keys(data).every((key) =>
            notRequiredFields?.[stage]?.includes(key) ? true : data[key]
          ),
      stage === 7,
    ],
    [data, stage, applicationDetails, progressDetails]
  );

  const next = (e) => {
    e && e.preventDefault();

    const args = {
      id: applicationId,
      stage,
      createdAt: new Date(),
      data,
    };
    saveProgressByStage(args);
  };
  const back = () => {
    setStage(stage - 1);
  };

  return (
    <AnimatedPage className={"application-page"}>
      <Progress
        stage={stage}
        goToStage={stage && !savingProgress && goToStage}
        completedStages={
          (progressDetails || applicationDetails)?.completedStages
        }
      />
      {isLoading || !stage ? (
        <Spinner desc={"Initializing your application..."} />
      ) : (
        <CustomSection className={"application"}>
          <header>
            <h1>{headers[stage - 1]}</h1>
          </header>
          <form onSubmit={next}>
            {!isSubmitStage ? (
              appStagesContent[stage - 1]?.map(({ name, label, options }) =>
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
                <p>{terms1}</p> <p>{terms2}</p>
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
              {savingProgress ? (
                <Spinner />
              ) : (
                <button type="submit" className={!canSave ? "disabled" : ""}>
                  {isSubmitStage ? "Submit Application" : "Save & Continue"}
                </button>
              )}
            </div>
          </form>
        </CustomSection>
      )}
    </AnimatedPage>
  );
};

export default Application;
