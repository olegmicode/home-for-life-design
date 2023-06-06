import { useState, useMemo, useEffect } from "react";

const usePhotoBlobs = (rooms) => {
  const urls = useMemo(() => rooms.map(({ fileName }) => fileName), [rooms]);
  const [blobURLs, setBlobURLs] = useState([]);
  console.log("[URLs]", urls);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const signal = controller.signal;
        const result = await Promise.all(
          urls.map(async (url) => {
            try {
              const blob = await fetch(url, { signal }).then((res) =>
                res.blob()
              );
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
        setBlobURLs(result);
      } catch (error) {
        setBlobURLs([]);
      }
    })();

    // Cancel the fetch request on any dependency change
    return () => controller.abort();
  }, [urls]);
  return blobURLs;
};

export default usePhotoBlobs;
