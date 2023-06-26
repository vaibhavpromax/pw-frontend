import React, { useEffect, useState } from "react";
import styles from "./FindIntern.module.scss";
import { TabNavSlider } from "../../components/TabNavSlider/TabNavSlider";
import SearchBox from "../../components/SearchBox/SearchBox";
import filterIcon from "../../assets/filter.png";
import Left from "./Left/Left";
import Right from "./Right/Right";
import useListings from "../../apis/useListings";

const FindIntern = () => {
  const { loading, getListings } = useListings();
  const [option, setOption] = useState("popular");
  const [searchValue, setSearchValue] = useState("");
  const [listings, setListings] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);
  const [filterValues, setFilterValues] = useState({});
  const [pagerData, setPagerData] = useState({
    size: 10,
    page: 0,
  });
  const [totalLogs, setTotalLogs] = useState(100); //initaly giving it ten so that first fetch gets completed after that it will be updated by api only

  const handleSearch = () => {
    setFilterValues({ name: searchValue });
  };

  useEffect(() => {
    if (option === "new") setFilterValues({ sort: "new" });
    else setFilterValues({});
  }, [option]);
  useEffect(() => {
    const init = async () => {
      await getListings(
        pagerData.size,
        pagerData.page,
        filterValues,
        (data) => {
          console.log(Object.keys(filterValues).length);
          if (Object.keys(filterValues).length != 0) {
            console.log("third");
            let arr = data.data?.rows;
            setListings(arr);
            if (arr[0]) setSelectedListing(arr[0]?.company_id);
            return;
          }
          if (pagerData.page === 0) {
            console.log("first");
            let arr = data.data?.rows;
            setListings(arr);
            if (arr[0]) setSelectedListing(arr[0]?.company_id);
            else setSelectedListing(null);
          } else {
            console.log("second");
            let arr = data.data?.rows;
            setListings((prev) => {
              return [...prev, ...arr];
            });
          }
          setTotalLogs(data.data.count);
        }
      );
    };
    init();
  }, [filterValues, pagerData]);

  const handleScroll = (e) => {
    e.stopPropagation();
    const t = e.target;
    if (
      Math.abs(t.scrollHeight - Math.floor(t.scrollTop) - t.clientHeight) <
        50 &&
      !loading
    ) {
      if (pagerData.size * pagerData.page < totalLogs) {
        setPagerData((prev) => {
          return { ...prev, page: prev.page + 1 };
        });
      }
    }
  };

  return (
    <div className={styles.findIntern}>
      <div className={styles.left}>
        <Left
          loading={loading}
          option={option}
          setOption={setOption}
          listings={listings}
          setFilterValues={setFilterValues}
          selectedListing={selectedListing}
          setSelected={setSelectedListing}
          handleScroll={handleScroll}
        />
      </div>
      <div className={styles.right}>
        <Right
          setPagerData={setPagerData}
          loading={loading}
          handleSearch={handleSearch}
          searchValue={searchValue}
          setFilterValues={setFilterValues}
          setSearchValue={setSearchValue}
          listings={listings}
          selectedListing={selectedListing}
        />
      </div>
    </div>
  );
};

export default FindIntern;
