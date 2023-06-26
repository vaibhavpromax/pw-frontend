import axios from "axios";
import { useState } from "react";

const useListings = () => {
  const [loading, setLoading] = useState(true);

  const getListings = async (size, page, data, cb) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/pw/listing/fetch?size=${size}&page=${page}`,
        data
      );
      // if (res.statusText !== "OK")
      //   throw new Error(res.msg || "Some error occured, please try again");
      if (cb && typeof cb === "function") cb(res.data);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    getListings,
    loading,
  };
};

export default useListings;
