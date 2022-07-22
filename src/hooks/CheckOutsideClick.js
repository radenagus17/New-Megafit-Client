import React, { useRef, useEffect } from "react";

const CheckOutsideClick = ({ onClickOutside, children }) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
    // eslint-disable-next-line
  }, []);

  if (!children) return null;
  return (
    <div className={`${!children ? "invisible" : "visible"} flex`} ref={ref}>
      {children}
    </div>
  );
};

export default CheckOutsideClick;
