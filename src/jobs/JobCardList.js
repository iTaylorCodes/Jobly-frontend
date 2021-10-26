import JobCard from "./JobCard";

const JobCardList = ({ jobs }) => {
  const jobsList = jobs.map((job) => <JobCard job={job} />);
  return <div className="JobCardList">{jobsList}</div>;
};

export default JobCardList;
