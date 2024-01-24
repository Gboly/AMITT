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
