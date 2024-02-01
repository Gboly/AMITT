import { useEffect, useState } from "react";

const usePopUpHandler = (popUpRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListeningActive, setIsListeningActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (isListeningActive) {
        const initiateClose = (e) =>
          !popUpRef.current.contains(e.target) && hide();
        document.addEventListener("click", initiateClose);
        return () => document.removeEventListener("click", initiateClose);
      } else {
        setIsListeningActive(true);
      }
    }
  }, [isOpen, isListeningActive, popUpRef]);

  const show = () => setIsOpen(true);
  const hide = () => {
    setIsListeningActive(false);
    setIsOpen(false);
  };

  return [isOpen, show, hide];
};

export default usePopUpHandler;
