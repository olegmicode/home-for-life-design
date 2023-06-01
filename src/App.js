import { useCallback, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ReportPDF from "./components/reports";
import ReportData1 from "./assets/samples/report1.json";
import ReportData2 from "./assets/samples/report2.json";
import './App.css'

function MyApp() {
  const [report, setReport] = useState(ReportData1);
  const onUpdateReport = useCallback(
    (type = "report1") => {
      if (type === "report1") {
        setReport(ReportData1);
      } else {
        setReport(ReportData2);
      }
    },
    [ReportData1, ReportData2]
  );
  return (
    <div>
      <h1>My React Application</h1>
      <div>
        <button onClick={() => onUpdateReport("report1")}>Report1</button>
        <button onClick={onUpdateReport}>Report2</button>
      </div>
      <div className="pdf-container">
        <PDFViewer>
          <ReportPDF data={report} />
        </PDFViewer>
      </div>
    </div>
  );
}

export default MyApp;
