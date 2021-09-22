import axios from "axios";

const url = "http://localhost:5050";

export const getCurrentState = async () => {
  let res = await axios.get(`${url}/current-state`);
  return res.data;
};
export const updateNewState = async (state: string) => {
  let res = await axios.post(`${url}/transition/${state}`);
  return res.data;
};
export const resetState = async () => {
  let res = await axios.post(`${url}/reset`);
  return res.data;
};
