import React, { useState } from "react";
import Slider from "react-slider";

import "./Slider.scss";

const DualSlider = ({
  stepLabels,
  values,
  setValues,
  min = 0,
  max = 5,
  step,
}) => {
  const handleChange = (newValues) => {
    setValues(newValues);
  };
  return (
    <div className="reactSlider">
      <Slider
        className="dualSlider"
        min={min}
        max={max}
        step={step}
        value={values}
        marks
        onChange={handleChange}
        renderMark={(props, state) => <div {...props} className="sliderMark" />}
        renderTrack={(props, state) => (
          <div {...props} className="sliderTrack" />
        )}
        renderThumb={(props, state) => (
          <div {...props} className="sliderThumb" />
        )}
      />
      <div className="stepsContainer">
        {stepLabels.map((step, index) => {
          return (
            <div key={index} className="stepsItem">
              <h3
                style={{
                  margin: 0,
                }}
              >
                {step}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DualSlider;
