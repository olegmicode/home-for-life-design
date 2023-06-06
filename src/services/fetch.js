import axios from "axios";
export const getReportAPIData = async (codeId) => {
  try {
    if (codeId) {
      const baseURL = window.REPORT_BASE_URL;
      const result = await axios
        .get(
          `${baseURL}/api/query/Reports/individualReport?reportCode=${codeId}`
        )
        .then((res) => res.data);
      return result;
    }
  } catch (error) {}
  return {};
};
