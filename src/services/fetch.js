import axios from "axios";
export const getReportAPIData = async (codeId) => {
  try {
    if (codeId) {
      const baseURL = window.REPORT_BASE_URL;
      // const response = await fetch(
      //   `${baseURL}/api/query/Reports/individualReport?reportCode=${codeId}`
      // ).then((response) => response.json());
      // const result = await axios
      //   .get(`${baseURL}/api/query/Reports/individualReport?reportCode=${codeId}`)
      //   .then((data) => data);
      // console.log("[result]", result);

      const result = await axios.get(`/${codeId}.json`).then((res) => res.data);
      console.log("[result]", result);
      return result;
    }
  } catch (error) {}
  return {};
};
