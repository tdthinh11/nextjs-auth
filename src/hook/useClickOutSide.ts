import { useCallback, useEffect } from "react";

const useClickOutSide = (popupRef: React.RefObject<HTMLDivElement>, callBack: () => void) => {
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      callBack();
    }
  }, [callBack, popupRef])

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    // Attach the event listener on mount
    document.addEventListener('click', handleDocumentClick);

    // Remove the event listener on unmount
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleClickOutside, callBack, popupRef]);
};

export default useClickOutSide;