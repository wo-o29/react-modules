import { type RefObject, useEffect, useRef } from "react";

const useOutsideClickRef = <T extends HTMLElement>(
  callback: () => void
): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(
    function outsideClickEffect() {
      const handleDocumentClick = (e: MouseEvent | TouchEvent) => {
        const container = ref.current;
        if (!container || container.contains(e.target as Node)) {
          e.stopPropagation();
          return;
        }

        callback();
      };

      document.addEventListener("mousedown", handleDocumentClick);

      return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
      };
    },
    [callback]
  );

  return ref;
};

export default useOutsideClickRef;
