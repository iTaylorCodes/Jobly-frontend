const JobCard = ({ job }) => {
  return (
    <div className="JobCard card">
      <h5>{job.title}</h5>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
