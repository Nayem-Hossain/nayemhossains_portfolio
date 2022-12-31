import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="navbar bg-base-100 w-2/3 justify-center mt-12 mx-auto">
      <ul className="menu menu-horizontal px-2">
        <li>
          <Link to="/professional-skills">Professional Skills</Link>
        </li>
        <li>
          <Link to="/certifications">Certifications</Link>
        </li>
        <li>
          <Link to="/educational-history">Educational History</Link>
        </li>
        <li>
          <Link to="/work-experiences">Work Experiences</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
