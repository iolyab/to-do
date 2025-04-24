import React from "react";
import { useState, useEffect, useRef } from "react";
import classes from "./dropdown.module.scss";

const Dropdown = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classes.dropdownContainer} ref={dropdownRef}>
      <div onClick={handleDropdownClick}>{trigger}</div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export { Dropdown };
