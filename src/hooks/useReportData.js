import { useState, useEffect, useMemo } from "react";
import { getReportAPIData } from "../services/fetch";

const useReportData = () => {
  const [report, setReport] = useState({});
  const reportCode = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  }, []);

  useEffect(() => {
    (async () => {
      if (reportCode) {
        const data = await getReportAPIData(reportCode);
        const { rooms } = data;
        for (const room of rooms) {
          const roomPhotoBlobs = await Promise.all(
            room.roomPhotos.map(async ({ fileName }) => {
              try {
                const blob = await fetch(fileName).then((res) => res.blob());
                return new Promise((res) => {
                  const reader = new FileReader();
                  reader.onloadend = () => res(reader.result);
                  reader.readAsDataURL(blob);
                });
              } catch (error) {
                return null;
              }
            })
          );
          room.roomPhotoBlobs = roomPhotoBlobs;
        }
        setReport(data);
      }
    })();
  }, [reportCode]);
  return report;
};

export default useReportData;
