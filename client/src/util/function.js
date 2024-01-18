export const isDev = process.env.NODE_ENV === "development";

export const chooseAtRandomFromArray = (array) => {
    const position = Math.floor(Math.random() * array.length);
    return array[position];
  };