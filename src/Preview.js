import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
import ReportPDF from "./components/reports";
import { useEffect } from "react";

const Preview = ({ data }) => {
  return (
    <PDFViewer>
      <ReportPDF data={data} />
    </PDFViewer>
  );
};

export default Preview;
