import { useEffect, useRef, useState } from 'react';
import TabNavBtn from './TabNavBtn/TabNavBtn';
import styles from './TabNavSlider.module.scss';
const TabNavSlider = ({ width = '100%', className, buttons, value, setValue }) => {
  const [activeButton, setActiveButton] = useState(0);
  const [btnWidth, setBtnWidth] = useState(0);
  const tabNavRef = useRef(null);
  useEffect(() => {
    let index;
    buttons.forEach((button, i) => {
      if (button.value === value) index = i;
    });
    setActiveButton(index);
  }, [value]);
  const setButtonWidth = () => {
    let tabNavWidth = tabNavRef.current?.clientWidth;
    setBtnWidth(tabNavWidth / buttons.length - 5);
  };
  useEffect(() => {
    window.addEventListener('resize', setButtonWidth);
    setButtonWidth();
  }, []);
  return (
    <div>
      <div ref={tabNavRef} className={`${styles.tabNavContainer}  ${className}`} style={{ width }}>
        {buttons.map((button) => (
          <TabNavBtn
            active={value === button.value}
            onClick={() => setValue(button.value)}
            width={`${btnWidth}px`}
            key={button.value}>
            {button.label}
          </TabNavBtn>
        ))}
        <div
          className={`${styles.activePill}`}
          style={{
            left: `calc(0.35rem + ${activeButton * btnWidth}px)`,
            width: `${btnWidth}px`
          }}
        />
      </div>
    </div>
  );
};

export { TabNavSlider, TabNavBtn };
