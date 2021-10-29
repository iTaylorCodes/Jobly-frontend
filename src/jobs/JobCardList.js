import JobCard from "./JobCard";

const JobCardList = ({ jobs }) => {
  const jobCardList = jobs.map((job) => <JobCard job={job} />);
  return <div className="JobCardList">{jobCardList}</div>;
};

export default JobCardList;
