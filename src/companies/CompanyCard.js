import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Shows a card with information about a company.
 *
 * Renders on CompaniesList component.
 */

const CompanyCard = ({ handle, name, logoUrl, description }) => {
  return (
    <Link className="CompanyCard card" to={`/companies/${handle}`}>
      <div>
        <h5>
          {name}
          {logoUrl && <img src={logoUrl} alt={name} />}
        </h5>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CompanyCard;
