import React, { useState } from "react";
import styles from "./Left.module.scss";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Card from "../../../components/Card/Card";

const options = [
  { label: "Popular", value: "popular" },
  { label: "Newest", value: "new" },
  { label: "Bookmarks", value: "bookmarks" },
];

const Left = ({ listings, setSelected, selectedListing, setFilterValues , option , setOption }) => {
  return (
    <div className={styles.left}>
      <div className={styles.top}>
        <TabNavSlider
          width="370px"
          buttons={options}
          value={option}
          setValue={setOption}
        />
      </div>

      <div className={styles.bottom}>
        {listings?.length != 0 ? (
          <>
            {listings?.map((li, index) => {
              return (
                <Card
                  selected={selectedListing}
                  setSelected={setSelected}
                  key={index}
                  listing={li}
                />
              );
            })}
          </>
        ) : (
          <>
            <h1 className={styles.nf}>Not found</h1>
          </>
        )}
        {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  );
};

export default Left;
