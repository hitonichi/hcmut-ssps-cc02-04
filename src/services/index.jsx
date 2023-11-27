import { useState } from "react";

const baseUrl = service.env.REACT_APP_BACKEND_BASE_URL;

export const getPrinter = () => {
    const [containerData, setContainerData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + "/printers")
      .then((response) => {
        setContainerData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return(
    <div></div>
  );
};
