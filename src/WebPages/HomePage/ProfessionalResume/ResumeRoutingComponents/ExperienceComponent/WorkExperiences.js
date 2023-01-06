import React from "react";

const WorkExperiences = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center">
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
      >
        <h3 className="text-4xl font-bold mt-6 mb-12">
          Work Experiences
        </h3>
        <ol>
            
          {/* University Details */}

          <li className="border-l-2">
            <div className="md:flex flex-start">
              <div
                style={{
                  background: "linear-gradient(to right, #17d396, #07f7f7)",
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full -ml-5"
              >
                <svg
                  aria-hidden="false"
                  focusable="false"
                  data-prefix="fas"
                  className="text-white w-4/5 h-4/5 stroke-cyan-500 fill-cyan-500 hover:fill-cyan-700"
                  role="img"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="M8 0L1 4v8l7 4 7-4V4L8 0zm3.119 8.797L9.254 9.863 7.001 8.65v2.549l-2.118 1.33v-5.33l1.68-1.018 2.332 1.216V4.794l2.23-1.322-.006 5.325z"
                  ></path>
                </svg>
              </div>
              <div className="px-6 rounded-lg shadow-lg  ml-3 mb-10 w-full">
                <div className="mb-4">
                  <a
                    href="https://www.iiuc.ac.bd/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl font-semibold "
                  >
                    
                    International Islamic University Chittagong
                  </a>
                </div>
                <div className="ml-6">
                  <p className="mb-1">
                    &#10149; B.Sc. in Computer Science and Engineering &#40; CSE
                    &#41; | 2018&minus;2023
                  </p>
                  <p className="mb-1">&#10149; CGPA: 3.509</p>
                </div>
              </div>
            </div>
          </li>

          {/* High School Details */}

          <li className="border-l-2">
            <div className="md:flex flex-start">
              <div
                style={{
                  background: "linear-gradient(to right, #17d396, #07f7f7)",
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full -ml-5"
              >
                <svg
                  aria-hidden="false"
                  focusable="false"
                  data-prefix="fas"
                  className="text-white w-4/5 h-4/5 stroke-cyan-500 fill-cyan-500 hover:fill-cyan-700"
                  role="img"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="M8 0L1 4v8l7 4 7-4V4L8 0zm3.119 8.797L9.254 9.863 7.001 8.65v2.549l-2.118 1.33v-5.33l1.68-1.018 2.332 1.216V4.794l2.23-1.322-.006 5.325z"
                  ></path>
                </svg>
              </div>
              <div className="px-6 rounded-lg shadow-lg  ml-3 mb-10 w-full">
                <div className="mb-4">
                  <a
                    href="https://rebotimohanpilotschool.business.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl font-semibold "
                  >
                    
                    Siddhirganj Rebati Mohan Pilot High School & College
                  </a>
                </div>
                <div className="ml-6">
                  <p className="mb-1">
                    &#10149; Secondary School Certificate Examination &#40;
                    Science &#41; | 2015
                  </p>
                  <p className="mb-1">&#10149; GPA: 4.67</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default WorkExperiences;
