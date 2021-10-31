import JobCard from "./JobCard";

const JobCardList = ({ jobs }) => {
  const jobCardList = jobs.map((job) => <JobCard key={job.id} job={job} />);
  return <div className="JobCardList">{jobCardList}</div>;
};

export default JobCardList;
