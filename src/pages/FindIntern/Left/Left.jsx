import React, { useState } from "react";
import styles from "./Left.module.scss";
import { TabNavSlider } from "../../../components/TabNavSlider/TabNavSlider";
import Card from "../../../components/Card/Card";
import Skeleton from "../../../components/Skeleton/Skeleton";

const options = [
  { label: "Popular", value: "popular" },
  { label: "Newest", value: "new" },
  { label: "Bookmarks", value: "bookmarks" },
];

const Left = ({
  listings,
  setSelected,
  selectedListing,
  setFilterValues,
  loading,
  option,
  setOption,
}) => {
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
        {loading ? (
          <div className={styles.loader}>
            {new Array(7).fill(0).map((_, index) => (
              <Skeleton key={index} className={styles.skeleton} />
            ))}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Left;
