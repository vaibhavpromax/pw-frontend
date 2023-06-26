import React, { useEffect, useRef, useState } from "react";
import styles from "./Right.module.scss";

import filterIcon from "../../../assets/filter.png";
import SearchBox from "../../../components/SearchBox/SearchBox";
import { ICONS } from "../../../icons";
import Button from "../../../components/Button/Button";
import Logo from "../../../assets/companyLogo1.png";
import Filter from "../../../components/Filter/Filter";
import { getSkillsArray } from "../../../utils/getSkillsArray";

const tags = [
  "Photoshop",
  "After effects",
  "Blender",
  "ReactJS",
  "MongoDB",
  "ExpressJS",
  "Clean architecture",
  "NodeJS",
];
const Right = ({
  listings,
  selectedListing,
  setSearchValue,
  searchValue,
  setFilterValues,
  handleSearch,
}) => {
  const [company, setCompany] = useState(null);
  const closeFilterRef = useRef();
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    setCompany(null);
    listings?.map((li) => {
      if (li?.company_id == selectedListing) {
        setCompany(li);
      }
    });
  }, [selectedListing]);

  return (
    <>
      <div className={styles.right}>
        <div className={styles.top}>
          <SearchBox
            width="95%"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            handleSearch={handleSearch}
            placeholder="Enter company name here ......"
          />
          <div ref={closeFilterRef} className={styles.filter}>
            <div
              onClick={(e) => {
                showFilter ? setShowFilter(false) : setShowFilter(true);
              }}
              className={styles.filterBtn}
            >
              {ICONS.filter}
            </div>
            {showFilter && (
              <Filter
              setFilterValues={setFilterValues}
                setShowFilter={setShowFilter}
                showFilter={showFilter}
                closeFilterRef={closeFilterRef}
              />
            )}
          </div>
        </div>

        {company ? (
          <div className={styles.bottom}>
            <div className={styles.type}>{company?.company_status}</div>
            <div className={styles.header}>
              <div className={styles.logo}>
                <img src={company?.company_logo} alt="" />
              </div>
              <div className={styles.name}>
                <h4>{company?.position}</h4>
                <h5>{company?.name}</h5>
              </div>
            </div>
            <div className={styles.quickInfo}>
              <div className={styles.upper}>
                <div className={styles.btn}>
                  {ICONS.timer}
                  <div className={styles.right}>
                    <b>{company?.duration} months</b>
                    Duration
                  </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.btn}>
                  {ICONS.ranking}
                  <div className={styles.right}>
                    <b>{company?.experience}</b>
                    Experience
                  </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.btn}>
                  {ICONS.wallet}
                  <div className={styles.right}>
                    <b>
                      ₹{company?.stipend_min} - ₹{company?.stipend_max}{" "}
                    </b>
                    Stipend
                  </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.btn}>
                  {ICONS.location}
                  <div className={styles.right}>
                    <b>{company?.location}</b>Location
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.lower}>
                <div className={styles.btn}>
                  {ICONS.calendar}
                  <div className={styles.right}>
                    <b>
                      {new Date().getDay() -
                        new Date(company?.date_posted).getDay()}{" "}
                      Days Ago
                    </b>
                    Posted
                  </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.btn}>
                  {ICONS.clipboardclose}
                  <div className={styles.right}>
                    <b>
                      {new Date(company?.expiry_date).getDay() -
                        new Date().getDay()}{" "}
                      Days
                    </b>
                    Ends in
                  </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.btn}>
                  {ICONS.usertick}
                  <div className={styles.right}>
                    <b>{company?.number_of_positions}</b>
                    Open positions
                  </div>
                </div>
                <div className={styles.vline}></div>
                <div className={styles.btn}>
                  {ICONS.user}
                  <div className={styles.right}>
                    <b>{company?.total_applicants}</b>
                    Total Applicants
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.tags}>
              {getSkillsArray(company?.skills).map((tag) => {
                return <div className={styles.tag}>{tag}</div>;
              })}
            </div>

            <div className={styles.info}>
              <div className={styles.about}>
                <h3>About Us</h3>
                <p>{company?.about_us}</p>
              </div>

              <div className={styles.req}>
                <h3>Requirements</h3>
                <ul>
                  {company?.requie.map((req) => {
                    return <li>{req} </li>;
                  })}
                </ul>
              </div>
              <div className={styles.res}>
                <h3>Responsibilities</h3>
                <ul>
                  {company?.respo.map((res) => {
                    return <li> {res} </li>;
                  })}
                </ul>
              </div>
              <Button className={styles.button}> Apply Now</Button>
            </div>

            <div className={styles.link}>Visit Website</div>
          </div>
        ) : (
          <>
            <h1 className={styles.nf}>Not Found</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Right;
