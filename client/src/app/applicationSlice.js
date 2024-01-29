import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getInitialInfo } from "../util/function";
import { appStagesContent } from "../util/content";

const initialState = getInitialInfo([].concat(...appStagesContent));

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
        accum = { ...accum, [key]: data[key] };
        return accum;
      }, {});

      state = updatedState;
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

export const { inputValue, applySavedValues } = applicationSlice.actions;

export const applicationReducer = applicationSlice.reducer;
