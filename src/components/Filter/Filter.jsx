import React, { useEffect, useRef, useState } from "react";
import styles from "./Filter.module.scss";
import Select from "../Select/Select";
import { ICONS } from "../../icons";
import Button from "../Button/Button";
import RadioGroup from "../RadioGroup/RadioGroup";
import DualSlider from "../Slider/Slider";
import {
  StipendOptions,
  applicantLabels,
  applicantOptions,
  categoryOptions,
  duartionOptions,
  durationLabels,
  locationOptions,
  skillOptions,
  stipendLabels,
  timingOptions,
  typeOptions,
} from "../../const";

const Filter = ({
  closeFilterRef,
  setShowFilter,
  showFilter,
  setFilterValues,
  setPagerData,
  loading,
}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [timings, setTimings] = useState(null);
  const [type, setType] = useState(null);
  const [duration, setDuration] = useState([0, 5]);
  const [stipend, setStipend] = useState([0, 5]);
  const [applicants, setApplicants] = useState([0, 5]);

  const closeFilter = (event) => {
    if (event) {
      event.stopPropagation();
      setShowFilter(false);
      // console.log('closed');
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeFilterRef.current &&
        !closeFilterRef.current.contains(event.target)
      ) {
        if (event) {
          event.stopPropagation();
          closeFilter(event);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeFilterRef]);

  const applyFilter = () => {
    setFilterValues({});
    if (type)
      setFilterValues((prev) => {
        return { ...prev, type: type };
      });
    if (timings)
      setFilterValues((prev) => {
        return { ...prev, timing: timings };
      });
    if (selectedLocations.length != 0) {
      const locarray = selectedLocations?.map((loc) => {
        return loc.value;
      });
      setFilterValues((prev) => {
        return { ...prev, locations: locarray };
      });
    }
    if (selectedCategories.length != 0) {
      const catarray = selectedCategories?.map((cat) => {
        return cat.value;
      });
      setFilterValues((prev) => {
        return { ...prev, category: catarray };
      });
    }

    if (selectedSkills.length != 0) {
      const skillarr = selectedSkills?.map((skill) => {
        return skill.value;
      });
      setFilterValues((prev) => {
        return { ...prev, skill: skillarr };
      });
    }
    if (JSON.stringify(duration) !== JSON.stringify([0, 5])) {
      setFilterValues((prev) => {
        return {
          ...prev,
          duration_start: duartionOptions[duration[0]],
          duration_end: duartionOptions[duration[1]],
        };
      });
    }

    if (JSON.stringify(stipend) !== JSON.stringify([0, 5])) {
      setFilterValues((prev) => {
        return {
          ...prev,
          stipend_start: StipendOptions[stipend[0]],
          stipend_end: StipendOptions[stipend[1]],
        };
      });
    }

    if (JSON.stringify(applicants) !== JSON.stringify([0, 5])) {
      setFilterValues((prev) => {
        return {
          ...prev,
          applicants_start: applicantOptions[applicants[0]],
          applicants_end: applicantOptions[applicants[1]],
        };
      });
    }
  };
  const clearFilter = () => {
    setPagerData({ size: 10, page: 0 });
    setFilterValues({});
    setSelectedCategories([]);
    setSelectedSkills([]);
    setSelectedLocations([]);
    setTimings(null);
    setType(null);
    setStipend([0, 5]);
    setApplicants([0, 5]);
    setDuration([0, 5]);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.header}>
        <h3>Filters</h3>
        <div onClick={closeFilter} className={styles.closebtn}>
          {ICONS.closesquare}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.section}>
          <h3>Category</h3>
          <Select
            options={categoryOptions}
            value={selectedCategories}
            setValue={setSelectedCategories}
            placeholder="Enter categories"
          />
        </div>
        <div className={styles.section}>
          <h3>Skills</h3>
          <Select
            options={skillOptions}
            value={selectedSkills}
            setValue={setSelectedSkills}
            placeholder="Enter skills"
          />
        </div>
        <div className={styles.section}>
          <h3>Timings</h3>
          <RadioGroup
            name="timing"
            onChange={(e) => {
              setTimings(e.target.value);
            }}
            theme="BOXED"
            state={timings}
            options={timingOptions}
          />
        </div>
        <div className={styles.section}>
          <h3>Type</h3>
          <RadioGroup
            name="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
            theme="BOXED"
            state={type}
            options={typeOptions}
          />
        </div>
        <div className={styles.section}>
          <h3>Duration (Months)</h3>
          <DualSlider
            setValues={setDuration}
            values={duration}
            min={0}
            max={5}
            stepLabels={durationLabels}
            step={1}
          />
        </div>
        <div className={styles.section}>
          <h3>Location</h3>
          <Select
            options={locationOptions}
            value={selectedLocations}
            setValue={setSelectedLocations}
            placeholder="Enter locations"
          />
        </div>
        <div className={styles.section}>
          <h3>Stipend</h3>
          <DualSlider
            setValues={setStipend}
            values={stipend}
            min={0}
            max={5}
            stepLabels={stipendLabels}
            step={1}
          />
        </div>
        <div className={styles.section}>
          <h3>Applicants</h3>
          <DualSlider
            setValues={setApplicants}
            values={applicants}
            min={0}
            max={5}
            stepLabels={applicantLabels}
            step={1}
          />
        </div>
      </div>
      <div className={styles.buttonRow}>
        <div onClick={clearFilter} className={styles.clear}>
          Clear All
        </div>
        <Button loading={loading} onClick={applyFilter}>
          {" "}
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;
