import React from "react";
import "./ProfessionalResume.css";
import { Route, Routes } from "react-router-dom";

import RoutingLinks from "./ResumeRoutingComponents/RoutingLinks";
import Education from "./ResumeRoutingComponents/EducationComponent/Educations";
import Certifications from "./ResumeRoutingComponents/CertificationComponent/Certifications";
import ProfessionalSkills from "./ResumeRoutingComponents/SkillComponent/ProfessionalSkills";
import WorkExperiences from "./ResumeRoutingComponents/ExperienceComponent/WorkExperiences";
import NoMatch from "../../../SharedComponents/ErrorPage404/NoMatch";

const ProfessionalResume = () => {
  return (
    <section>
      <h1 className="heading">Professional Resume</h1>
      <RoutingLinks></RoutingLinks>
      <Routes>
        <Route
          exact
          path="/"
          element={<ProfessionalSkills></ProfessionalSkills>}
        ></Route>
        <Route
          path="professional-skills"
          element={<ProfessionalSkills></ProfessionalSkills>}
        ></Route>

        <Route
          path="certifications"
          element={<Certifications></Certifications>}
        ></Route>

        <Route
          path="educational-history"
          element={<Education></Education>}
        ></Route>

        <Route
          path="work-experiences"
          element={<WorkExperiences></WorkExperiences>}
        ></Route>

        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </section>
  );
};

export default ProfessionalResume;
