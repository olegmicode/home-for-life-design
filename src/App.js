import useReportData from "./hooks/useReportData";
import Preview from "./Preview";
import "./App.css";
import { useCallback, useState } from "react";
import ReactModal from "react-modal";

function PDFReportApp() {
  const report = useReportData();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowModal(true);
  }, []);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <div className="">
      <button
        className="report-pdf-btn"
        onClick={handleOpenModal}
        disabled={!report.rooms}
      >
        Preview Report
      </button>
      <ReactModal isOpen={showModal} contentLabel="PDF report preview">
        <div className="report-close-btn-wrapper">
          <div
            onClick={handleCloseModal}
            className="report-close-btn"
            title="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24"
              height="24"
            >
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
            </svg>
          </div>
        </div>
        <div className="report-modal-content">
          {report.rooms && <Preview data={report} />}
        </div>
      </ReactModal>
    </div>
  );
}

export default PDFReportApp;
