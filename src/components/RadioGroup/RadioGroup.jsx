import React from "react";
import styles from "./RadioGroup.module.scss";
import Checkbox from "../Checkbox/Checkbox";

const THEMES = {
  SIMPLE: "SIMPLE",
  BOXED: "BOXED",
};

const RadioGroup = ({
  name,
  options,
  theme = "SIMPLE",
  state,
  setState,
  className,
  onChange,
}) => {
  return (
    <div className={`${styles.group} ${styles[THEMES[theme]]} ${className}`}>
      {options.map((item) => {
        return (
          <div key={item.value} className={styles.option} onChange={onChange}>
            <div className={styles.left}>
              {theme === "SIMPLE" && (
                <input
                  type="radio"
                  disabled={item.disabled}
                  id={item.value}
                  name={name}
                  value={item.value}
                  defaultChecked={state === item.value}
                ></input>
              )}
              {theme === "BOXED" && (
                <Checkbox
                  tick={state === item.value}
                  disabled={item.disabled}
                  value={item.value}
                  checked={state === item.value}
                  onClick={(e) => {
                    e.target.value = item.value;
                    onChange(e);
                  }}
                />
              )}
            </div>

            <div className={styles.right}>
              <label htmlFor={name}>
                {item.label} {item.disabled && "(Coming Soon...)"}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
