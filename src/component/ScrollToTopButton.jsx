import React, { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button if user scrolls down 300px or more
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px",
            backgroundColor: "#fff",
            color: "black",
            borderRadius: "50%",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <FaArrowTurnUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
