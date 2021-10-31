import { useState, useContext, useEffect } from "react";
import "./JobCard.css";
import UserContext from "../auth/UserContext";

/** Show information for a job in a card format.
 *
 * Receives apply for job function from UserContext
 *
 * Rendered by JobCardList component
 */
const JobCard = ({ job }) => {
  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  useEffect(() => {
    setApplied(hasAppliedToJob(job.id));
  }, [job.id, hasAppliedToJob]);

  // Handles applying to jobs
  const handleApply = async (e) => {
    if (hasAppliedToJob(job.id)) return;
    applyToJob(job.id);
    setApplied(true);
  };

  return (
    <div className="JobCard card">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p>{job.companyName}</p>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
        <button
          className="btn btn-info"
          onClick={handleApply}
          disabled={applied}
        >
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
