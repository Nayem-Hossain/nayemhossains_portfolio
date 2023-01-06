import React from "react";
import "./ProfessionalResume.css";
import { Route, Routes } from "react-router-dom";

//import React Routing Component
import RoutingLinks from "./ResumeRoutingComponents/RoutingLinks";
import Education from "./ResumeRoutingComponents/EducationComponent/Educations";
import Certifications from "./ResumeRoutingComponents/CertificationComponent/Certifications";
import ProfessionalSkills from "./ResumeRoutingComponents/SkillComponent/ProfessionalSkills";
import WorkExperiences from "./ResumeRoutingComponents/ExperienceComponent/WorkExperiences";
import NoMatch from "../../../SharedComponents/ErrorPage404/NoMatch";

const ProfessionalResume = ({ color = " from-[#2361ff] to-[#07f7f7]" }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    // <section>
    //   <h1 className="heading">Professional Resume</h1>
    //   <RoutingLinks></RoutingLinks>
    //   <Routes>
    //     <Route
    //       exact
    //       path="/"
    //       element={<ProfessionalSkills></ProfessionalSkills>}
    //     ></Route>
    //     <Route
    //       path="professional-skills"
    //       element={<ProfessionalSkills></ProfessionalSkills>}
    //     ></Route>

    //     <Route
    //       path="certifications"
    //       element={<Certifications></Certifications>}
    //     ></Route>

    //     <Route
    //       path="educational-history"
    //       element={<Education></Education>}
    //     ></Route>

    //     <Route
    //       path="work-experiences"
    //       element={<WorkExperiences></WorkExperiences>}
    //     ></Route>

    //     <Route path="*" element={<NoMatch></NoMatch>}></Route>
    //   </Routes>
    // </section>

    <section className="mx-auto lg:w-9/12">
      <h1 className="heading">Professional Resume</h1>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex flex-col lg:flex-row list-none pt-3 pb-4"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadowbg--lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gradient-to-r" + color
                    : "text-slate-700 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Professional
                Skills
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gradient-to-r" + color
                    : "text-slate-700 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i class="fa-solid fa-award text-base mr-1"></i> Certifications
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadowbg--lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-gradient-to-r" + color
                    : "text-slate-700 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fa-solid fa-graduation-cap text-base mr-1"></i> Educations
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-2 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-gradient-to-r" + color
                    : "text-slate-700 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <i className="fa-solid fa-house-laptop text-base mr-1"></i> Work Experiences
              </a>
            </li>
          </ul>

          <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ProfessionalSkills></ProfessionalSkills>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Certifications></Certifications>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Education></Education>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <WorkExperiences></WorkExperiences>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalResume;
