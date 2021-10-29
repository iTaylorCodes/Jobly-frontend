import "./JobCard.css";

const JobCard = ({ job }) => {
  return (
    <div className="JobCard card">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p>{job.companyName}</p>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
        <button className="btn btn-info">Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
