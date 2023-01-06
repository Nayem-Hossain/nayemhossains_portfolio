import React from "react";
import "./Home.css";
import Navbar from "../../SharedComponents/NavigationBar/Navbar";
import Profile from "./ProfileSection/Profile";
import Footer from "../../SharedComponents/Footer/Footer";
import ProfessionalResume from "./ProfessionalResume/ProfessionalResume";
import Profession from "./What_I_do/Profession";
import Portfolio from "./PortfolioSection/Portfolio";
import ContactMe from "./ContactSection/ContactMe";

const Home = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="sm:mx-4">
        <Profile></Profile>
        <Profession></Profession>
        <ProfessionalResume></ProfessionalResume>
        <Portfolio></Portfolio>
      </div>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </section>
  );
};

export default Home;
