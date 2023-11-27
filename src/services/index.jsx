import axios from "axios";

const baseUrl = "http://localhost:8080";

export const getPrinter = async () => {
  try {
    const {data} = await axios.get(baseUrl + "/printers");
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
