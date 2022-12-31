import React from "react";

const Certifications = () => {
  return (
    <section className="grid grid-cols-1 justify-items-center">
      <div
        
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="text-4xl text-gray-700 font-bold mt-6 mb-12">
          Certifications
        </h3>
        <ol>
          {/* Introduction to HTML5 (Coursera) */}

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
              <div className="px-6 rounded-lg shadow-lg bg-gray-100 ml-3 mb-10 w-full">
                <div className="mb-4">
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/J9A8V2GMRFP7"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl font-semibold "
                  >
                    Introduction to HTML5 &#40; from Coursera &#41;
                  </a>
                  <p className="italic">
                    &minus;Offered by University of Michigan
                  </p>
                </div>
                <div className="ml-6">
                  <p className="mb-1">&#10149; Credential ID : J9A8V2GMRFP7</p>
                </div>
              </div>
            </div>
          </li>

          {/* Introduction to CSS3 (Coursera) */}

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
              <div className="px-6 rounded-lg shadow-lg bg-gray-100 ml-3 mb-10 w-full">
                <div className="mb-4">
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/CP3398YRWLRH"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl font-semibold "
                  >
                    Introduction to CSS3 &#40; from Coursera &#41;
                  </a>
                  <p className="italic">
                    &minus;Offered by University of Michigan
                  </p>
                </div>
                <div className="ml-6">
                  <p className="mb-1">&#10149; Credential ID : CP3398YRWLRH</p>
                </div>
              </div>
            </div>
          </li>

          {/* Interactivity with JavaScript (Coursera) */}

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
              <div className="px-6 rounded-lg shadow-lg bg-gray-100 ml-3 mb-10 w-full">
                <div className="mb-4">
                  <a
                    href="https://www.coursera.org/account/accomplishments/certificate/9NDZ4HUYF7LN"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl font-semibold "
                  >
                    Interactivity with JavaScript &#40; from Coursera &#41;
                  </a>
                  <p className="italic">
                    &minus;Offered by University of Michigan
                  </p>
                </div>
                <div className="ml-6">
                  <p className="mb-1">&#10149; Credential ID : 9NDZ4HUYF7LN</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Certifications;
