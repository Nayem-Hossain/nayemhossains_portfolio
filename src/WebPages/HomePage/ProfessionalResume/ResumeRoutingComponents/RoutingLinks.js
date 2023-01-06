import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="tabs w-2/3 justify-center mt-12 mx-auto">
      <ul className="bg-primary px-4 py-2 rounded-full text-white">
        <li className="tab tab-lifted text-xl">
          <Link to="/professional-skills">Professional Skills</Link>
        </li>
        <li className="tab tab-lifted text-xl">
          <Link to="/certifications">Certifications</Link>
        </li>
        <li className="tab tab-lifted text-xl">
          <Link to="/educational-history">Educational History</Link>
        </li>
        <li className="tab tab-lifted text-xl">
          <Link to="/work-experiences">Work Experiences</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
