import axios from "axios";

export const CONSTANTS = {
  API_BASE_URL: "https://jsonplaceholder.typicode.com",
};

export const callGETAPI = async (url: string) => {
  let response;
  const API_CONFIG = {
    headers: {
      Accept: "application/json",
      Authentication: "TOKEN",
    },
  };

  await axios
    .get(`${url}`, {
      ...API_CONFIG,
      timeout: 5000,
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
};

export const callPOSTAPI = async (url: string, body: any) => {
  let response;
  const API_CONFIG = {
    headers: {
      "Content-Type": "",
      Authentication: "TOKEN",
    },
  };

  await axios
    .post(`${url}`, body, {
      ...API_CONFIG,
      timeout: 5000,
    })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
};
