import { useParams } from "react-router";
import JoblyApi from "../api";

const Company = () => {
  const { handle } = useParams();
  const company = JoblyApi.getCompany(handle);
  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
    </div>
  );
};

export default Company;
