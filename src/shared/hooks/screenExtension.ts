import { useLayoutEffect, useState } from "react";
import { useDebounce } from "./debounce";

type ParametrsType = { screenExtension: number; maxScreen?: boolean }[];

const showElement = (params: ParametrsType) => {
  return params.map(({ screenExtension, maxScreen }) =>
    maxScreen ? globalThis.outerWidth <= screenExtension : globalThis.outerWidth >= screenExtension
  );
};

export const useScreenExtension = (params: ParametrsType) => {
  const [isTargetExtension, setTargetExtension] = useState(params.map(({ maxScreen }) => !!maxScreen));
  const setTargetExtensionDebounce = useDebounce(setTargetExtension);

  useLayoutEffect(() => {
    const handleResize = () => {
      setTargetExtensionDebounce(showElement(params));
    };
    setTargetExtension(showElement(params));
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  return isTargetExtension;
};
