import { useParams } from "react-router";
import JoblyApi from "./api";

const Company = () => {
  const { handle } = useParams();
  const company = JoblyApi.getCompany(handle);
  console.log(company);
  return <div>{company.name}</div>;
};

export default Company;
