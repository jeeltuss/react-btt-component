import React, { useEffect, useState } from "react";
import "./index.css";

const BTT = () => {
  const [visible, setVisible] = useState(false);

  // main document element (HTML)
  const rootElement = document.documentElement;

  const handleScroll = () => {
    // total possible scroll (total height - visible height)
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    // ratio between html scrollTop and total possible scroll
    const ratio = rootElement.scrollTop / scrollTotal;

    if (ratio >= 0.25) {
      //show
      setVisible(true);
    } else {
      // hide
      setVisible(false);
    }
    console.log(ratio);
  };

  const handleBtt = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      id="btt-wrap"
      className={`${visible ? "visible" : ""}`}
      onClick={handleBtt}>
      <span>^</span>
    </div>
  );
};

export default BTT;
