import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getInitialInfo } from "../util/function";
import { appStagesContent, fileTypes } from "../util/content";

const initialState = {
  ...getInitialInfo([].concat(...appStagesContent)),
  isSuccessful: false,
};

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    inputValue: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
      return state;
    },
    applySavedValues: (state, action) => {
      const data = action.payload;
      const updatedState = Object.keys(initialState).reduce((accum, key) => {
        // file fields are objects. There value is attached to the name key. Reason for the conditional below.
        accum = {
          ...accum,
          [key]: fileTypes.includes(key) ? data[key]?.name : data[key],
        };
        return accum;
      }, {});

      state = { ...updatedState, isSuccessful: false };
      return state;
    },
    setIsSuccess: (state, action) => {
      state.isSuccessful = action.payload;
      return state;
    },
  },
});

export const getDataByStage = createSelector(
  (state, stage) => ({ state, stage }),
  ({ state, stage }) => {
    if (stage === 7 || !stage) return {};

    const stageContent = appStagesContent[stage - 1];
    const data = stageContent.reduce((accum, { name }) => {
      accum = { ...accum, [name]: state.application[name] };
      return accum;
    }, {});

    return data;
  }
);

export const getSuccessState = (state) => state.application.isSuccessful;

export const { inputValue, applySavedValues, setIsSuccess } =
  applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
