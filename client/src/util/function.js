export const isDev = process.env.NODE_ENV === "development";

export const chooseAtRandomFromArray = (array) => {
  const position = Math.floor(Math.random() * array.length);
  return array[position];
};

export const prepareOptions = (data) => {
  const result = (data || []).map((item) => ({
    name: item?.name || item,
    desc: item?.name || item,
  }));
  return [{ name: "", desc: "Select" }, ...result];
};

export const getInitialInfo = (content) =>
  content.reduce((accum, { name }) => {
    accum = { ...accum, [name]: "" };
    return accum;
  }, {});

export const applicationId = localStorage.getItem("applicationId");

export const nextStage = (completedStages) => {
  const lastStage = completedStages[completedStages?.length - 1]?.stage;
  return !lastStage ? 1 : lastStage === 7 ? 7 : lastStage + 1;
};

const stages = [1, 2, 3, 4, 5, 6];
export const canSubmit = (ad, pd) => {
  const details = [
    ...(ad?.completedStages || []),
    ...(pd?.completedStages || []),
  ];
  const completedStages = details.map(({ stage }) => stage);
  return stages.every((stage) => completedStages.includes(stage));
};
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
