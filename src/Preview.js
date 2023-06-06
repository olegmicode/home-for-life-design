import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ReportPDF from "./components/reports";

const Preview = ({ data }) => {
  return (
    <PDFViewer>
      <ReportPDF data={data} />
    </PDFViewer>
  );
};

export default Preview;
