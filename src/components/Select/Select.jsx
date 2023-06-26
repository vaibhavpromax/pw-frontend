import React from "react";
import ReactSelect from "react-select";

const selectStyle = {
  indicatorsContainer: (prevStyle, state) =>
    state.isMulti
      ? {
          ...prevStyle,
          display: "none",
        }
      : null,

  control: (provided, state) => ({
    ...provided,
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    width: "244px",
    height: "40px",
  }),
  multiValueRemove: (base) => ({
    ...base,
  }),
  multiValueLabel: (base) => ({
    ...base,
    fontSize: "12px",
    fontWeight: "700",
    color: "#6938EF",
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "#EBE9FE",
    borderRadius: "10px",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
};

const Select = ({ options, value, setValue, placeholder }) => {
  return (
    <ReactSelect
      allowSelectAll={true}
      name="features"
      height="40px"
      options={options}
      value={value}
      onChange={setValue}
      menuPosition="fixed"
      isMulti
      placeholder={placeholder}
      styles={selectStyle}
    />
  );
};

export default Select;
