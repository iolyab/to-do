import React from "react";
import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const MuiDropdown = ({
  label,
  size = "small",
  value = "",
  placeholder = "",
  fullWidth = false,
  variant = "outlined",
  classes,
  onSelect,
  options,
  renderItem,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    if (typeof onSelect === "function") {
      onSelect(newValue);
    }
  };

  return (
    <FormControl size={size} fullWidth={fullWidth} variant={variant}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty={!!placeholder}
        renderValue={selectedValue !== "" ? undefined : () => placeholder}
        sx={{
          fontSize: "12px",
          ".MuiSelect-select": {
            padding: "3px 8px",
          },
          ".MuiSvgIcon-root": {
            fontSize: "18px",
          },
        }}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {typeof renderItem === "function" ? renderItem(option) : option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { MuiDropdown };
