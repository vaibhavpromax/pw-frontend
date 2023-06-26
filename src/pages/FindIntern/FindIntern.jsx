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
    size: 20,
    page: 0,
  });

  const handleSearch = () => {
    setFilterValues({ name: searchValue });
  };

  useEffect(() => {
    if (option === "new") setFilterValues({ sort: "new" });
    else setFilterValues({});
  }, [option]);

  useEffect(() => {
    const init = async () => {
      // if (pagerData.page === 1) setLoading(true);
      await getListings(
        pagerData.size,
        pagerData.page,
        filterValues,
        (data) => {
          if (pagerData.page === 0) {
            let arr = data.data;
            setListings(arr);
            if (arr[0]) setSelectedListing(arr[0]?.company_id);
            else setSelectedListing(null);
          } else {
            let arr = data.data.call_histories;
            setListings((prev) => {
              return [...prev, ...arr];
            });
          }
        }
      );
    };
    init();
  }, [filterValues]);
  // console.log(filterValues);
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
        />
      </div>
      <div className={styles.right}>
        <Right
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
