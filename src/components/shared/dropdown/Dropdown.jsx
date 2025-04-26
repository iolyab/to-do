import React from "react";
import { useState, useEffect, useRef } from "react";

const Dropdown = ({ classes, trigger, onSelect, options, renderItem }) => {
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

  const handleSelect = (option) => {
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className={classes.dropdownContainer} ref={dropdownRef}>
      <div onClick={handleDropdownClick}>{trigger}</div>
      {isOpen && (
        <div className={classes.dropDownMenu}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={classes.dropDownItem}
              classes={classes}
            >
              {renderItem(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
