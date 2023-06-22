import { useState, useEffect, useMemo } from "react";
import { getReportAPIData } from "../services/fetch";
import Resizer from "react-image-file-resizer";

const useReportData = () => {
  const [report, setReport] = useState({});
  const reportCode = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  }, []);

  useEffect(() => {
    const resizeFile = (file) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          1000,
          1400,
          "JPEG",
          98,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64"
        );
      });
    (async () => {
      if (reportCode) {
        const data = await getReportAPIData(reportCode);
        const { rooms } = data;
        if (rooms) {
          for (const room of rooms) {
            const roomPhotoBlobs = await Promise.all(
              room.roomPhotos.map(async ({ fileName }) => {
                try {
                  const blob = await fetch(fileName).then((res) => res.blob());
                  // return new Promise((res) => {
                  //   const reader = new FileReader();
                  //   reader.onloadend = () => res(reader.result);
                  //   reader.readAsDataURL(blob);
                  // });
                  return resizeFile(blob);
                } catch (error) {
                  return null;
                }
              })
            );
            room.roomPhotoBlobs = roomPhotoBlobs;
          }
          setReport(data);
        }
      }
    })();
  }, [reportCode]);
  return report;
};

export default useReportData;
