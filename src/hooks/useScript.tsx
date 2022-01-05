import { useEffect } from "react";

const useScript = (
  url: string,
  integrity: string | undefined = "",
  crossOrigin: string | undefined = "",
  _async: boolean | undefined = false
) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.integrity = integrity;
    script.crossOrigin = crossOrigin;
    script.async = _async;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, integrity, crossOrigin, _async]);
};

export default useScript;
