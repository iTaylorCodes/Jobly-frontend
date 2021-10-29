import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Shows a card with information about a company.
 *
 * Renders on CompaniesList component.
 */

const CompanyCard = ({ handle, name, logoUrl, description }) => {
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div className="card-body">
        <h5 className="card-title">
          {name}
          {logoUrl && (
            <img src={logoUrl} alt={name} className="float-right ml-5" />
          )}
        </h5>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
};

export default CompanyCard;
