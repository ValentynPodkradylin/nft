import { RefObject, useState } from "react";
import useEventListener from "./useEventListener";

export const useHover = <T extends HTMLElement = HTMLDivElement>(
  elementRef: RefObject<T>
) => {
  const [value, setValue] = useState<boolean>(false);
  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);

  return value;
};
