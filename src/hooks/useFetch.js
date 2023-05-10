import { useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [apiInfo, setApiInfo] = useState();

  const getApi = () => {
    axios
      .get(url)
      .then((res) => setApiInfo(res.data))
      .catch((err) => console.log(err));
  };
  return [apiInfo, getApi];
};

export default useFetch;
