import React from "react";
import "./Profile.css";
import ProfilePicture from "../../../images/profile_picture_wb.png";
import TypewritterAnimation from "./TypewritterAnimation";

const Profile = () => {
  return (
    <section className="flex items-center mx-12 pt-12 pb-20 border-b-2 border-gray-800">
      <div className="w-1/2">
        <p className="intro">Welcome to My World</p>
        <h1 id="name-prefix">
          Hi, I’m <span id="full-name">Nayem Hossain</span>
        </h1>
        <TypewritterAnimation></TypewritterAnimation>
        <p className="mt-8 mb-14">
          As a software engineer with self-motivated, and highly passionate, I
          am looking for the opportunity to work with a challenging organization
          to update my skills and knowledge and work for the growth of the
          company.
        </p>
        <div data-aos="fade-up" data-aos-duration="3000">
          <button className="btn glass mr-3">See My Resume</button>
          <button className="btn glass ml-3">Follow Me on Github</button>
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
        className="w-1/2"
      >
        <img
          src={ProfilePicture}
          alt="md nayem hossain"
          className="border-4 border-solid border-slate-400 rounded-full m-auto "
        />
      </div>
    </section>
  );
};

export default Profile;
