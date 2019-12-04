import useAPIData from "./fetchAPI.js";

export const parsedAPIData = async () => {
  const data = await useAPIData();
  return data.hdurl;
};
