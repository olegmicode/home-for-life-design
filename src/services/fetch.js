export const getReportAPIData = async (codeId) => {
  const baseURL = window.REPORT_BASE_URL;
  const response = await fetch(
    `${baseURL}/api/query/Reports/individualReport?reportCode=${codeId}`
  ).then((response) => response.json());

  return response;
};
