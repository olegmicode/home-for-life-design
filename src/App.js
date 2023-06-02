import { useState } from "react";
import { useMemo } from "react";
import { usePDF } from "@react-pdf/renderer";
import ReportPDF from "./components/reports";
import ReportData1 from "./assets/samples/report1.json";
import "./App.css";
import { useEffect } from "react";

function MyApp() {
  const reportCode = useMemo(() => {
    const params = new URLSearchParams(window.location.pathname);
    return params.get("reportCode");
  }, [window.location.href]);
  console.log("[report code]", reportCode, window.location);
  // const [report, setReport] = useState(ReportData1);

  // const document = useMemo(() => <ReportPDF data={report} />, [report]);
  // console.log("[instance]", report, instance);

  // const [instance, updateInstance] = usePDF({ document });
  // useEffect(() => {
  //   if (document) {
  //     updateInstance();
  //   }
  // }, [document]);

  // return instance.loading ? (
  //   <div>Loading ...</div>
  // ) : instance.error ? (
  //   <div>Something went wrong</div>
  // ) : (
  //   <a href={instance.url} download="test.pdf" className="report-download-btn">
  //     Download
  //   </a>
  // );
  return <div>test</div>;
}

export default MyApp;
