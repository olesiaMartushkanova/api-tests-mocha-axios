import axios from "axios";

export const sendRequest = async ({
  url,
  body,
  method,
  headers,
  params,
}) => {
  try {
    const data = await axios({
      method,
      url,
      headers,
      params,
      data: body,
    });
    return data;
  } catch (error) {
    return error;
  }
};
