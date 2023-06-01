import { useMemo } from "react";

const useHtmlToText = (htmlStr) => {
  return useMemo(() => {
    const p = new DOMParser().parseFromString(htmlStr, "text/html");
    return p?.childNodes[0]?.textContent || "";
  }, [htmlStr]);
};
export default useHtmlToText;
