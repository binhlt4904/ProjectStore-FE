import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = ({ targetRef }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = targetRef?.current;
    if (!element) return;

    const handleScroll = () => {
      setVisible(element.scrollTop > 300);
    };

    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  }, [targetRef]);

  const scrollToTop = () => {
    if (targetRef?.current) {
      targetRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-black text-white w-14 h-14 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center"
    >
      <FaChevronUp className="w-6 h-6" />
    </button>

  );
};

export default ScrollToTopButton;
