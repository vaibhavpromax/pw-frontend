import React from "react";
import styles from "./SearchBox.module.scss";
import { ICONS } from "../../icons/index";

const SearchBox = ({
  type,
  value,
  placeholder,
  onChange,
  width,
  height,
  handleSearch,
}) => {
  return (
    <div className={styles.search} style={{ width: width, height: height }}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div onClick={handleSearch} className={styles.icon}>
        {ICONS.search}
      </div>
    </div>
  );
};

export default SearchBox;
