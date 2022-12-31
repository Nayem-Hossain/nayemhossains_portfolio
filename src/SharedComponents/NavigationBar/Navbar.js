import React from "react";
import "./Navbar.css";
import Me from "../../images/me_wbg.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="flex-1">
        <div className="mx-1.5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
            <div className="w-12 rounded-full ">
              <a href="/">
                <img
                  src={Me}
                  alt="me logo"
                  className=" border-4 border-gray-700 rounded-full"
                />
              </a>
            </div>
          </label>
        </div>
        <p
          id="signature"
          className="text-2xl font-bold"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Nayem Hossain
        </p>
      </div>
      <div className="flex-none"></div>
    </header>
  );
};

export default Navbar;
