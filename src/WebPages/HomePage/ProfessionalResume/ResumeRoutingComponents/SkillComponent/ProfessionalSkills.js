import React from "react";
import "./ProfessionalSkills.css";

const ProfessionalSkills = () => {
  return (
    <section className="my-14">
      <div className="flex lg:justify-evenly">
        {/* Language Skills */}
        <div className="skills grid grid-cols-1 w-1/3">
          <h1 className="text-4xl text-gray-700 font-bold mt-6 mb-12">
            Language Skills
          </h1>
          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="500">
            <h2>C/C++</h2>
            <div className="progress-bar">
              <div className="c-c-plus-plus">
                <span>82%</span>
              </div>
            </div>
          </div>
          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="800">
            <h2>Python</h2>
            <div className="progress-bar">
              <div className="python">
                <span>72%</span>
              </div>
            </div>
          </div>
          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="1100">
            <h2>HTML5</h2>
            <div className="progress-bar">
              <div className="html5">
                <span>90%</span>
              </div>
            </div>
          </div>
          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="1400">
            <h2>CSS3</h2>
            <div className="progress-bar">
              <div className="css3">
                <span>70%</span>
              </div>
            </div>
          </div>
          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="1700">
            <h2>JavaScript</h2>
            <div className="progress-bar">
              <div className="javascript">
                <span>62%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stack Skills */}
        <div className="skills grid grid-cols-1 w-1/3">
          <h1 className="text-4xl text-gray-700 font-bold mt-6 mb-12">
            Stack Skills
          </h1>

          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="500">
            <h2>React.js</h2>
            <div className="progress-bar">
              <div className="reactjs">
                <span>80%</span>
              </div>
            </div>
          </div>

          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="800">
            <h2>React Native</h2>
            <div className="progress-bar">
              <div className="react-native">
                <span>30%</span>
              </div>
            </div>
          </div>

          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="1100">
            <h2>Node.js</h2>
            <div className="progress-bar">
              <div className="nodejs">
                <span>70%</span>
              </div>
            </div>
          </div>

          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="1400">
            <h2>SQL</h2>
            <div className="progress-bar">
              <div className="sql">
                <span>85%</span>
              </div>
            </div>
          </div>

          <div className="mb-4" data-aos="fade-right" data-aos-easing= "ease-in-out" data-aos-duration="1400">
            <h2>MongoDB</h2>
            <div className="progress-bar">
              <div className="mongodb">
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
