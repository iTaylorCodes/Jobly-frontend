import { useState, useEffect } from "react";
import SearchBar from "../search_bar/SearchBar";
import JobCardList from "./JobCardList";
import JoblyApi from "../api";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    search();
  }, []);

  const search = async (title) => {
    const returnedJobs = await JoblyApi.getJobs(title);
    setJobs(returnedJobs);
  };

  return (
    <div className="row justify-content-center" style={{ textAlign: "center" }}>
      <div className="col-md-7 col-lg-5 col-sm-10 col-12">
        <SearchBar search={search} />
        <div className="JobsList-list">
          <JobCardList jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default JobsList;
