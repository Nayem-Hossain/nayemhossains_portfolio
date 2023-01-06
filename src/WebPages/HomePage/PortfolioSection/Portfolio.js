import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import TravelSite from "../../../images/portfolio/TravelSite.png";
import AutoProCar from "../../../images/portfolio/AutoPro.png";
import DentalCare from "../../../images/portfolio/DentalCare.png";

const Portfolio = () => {
  return (
    // <section className="mx-14 pb-14">
    //   <h1 className="heading pb-14">Some of My Work</h1>
    //   <div className="grid lg:grid-cols-3 gap-4 justify-items-center">
    //     {/* Travelling website Card */}
    //     <div className="card rounded-md w-96 bg-base-100 shadow-xl">
    //       <div className="portfolio-container hvr-rectangle-out">
    //         <figure className="px-4 pt-4">
    //           <img
    //             className="h-60 w-full opacity-100 rounded-md"
    //             src={TravelSite}
    //             alt="Travelling Site"
    //           />
    //         </figure>

    //         <div className="middle-hovor-button border-2 rounded-full px-6 py-2 text-xl hover:bg-gradient-to-r from-[#07f7f7] to-transparent">
    //           <a
    //             href="https://travel-go-nayem.netlify.app/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Go Livesite
    //             {/* <i className="fa-sharp fa-solid fa-up-right-from-square"></i> */}
    //             <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
    //           </a>
    //         </div>
    //       </div>

    //       <div className="px-4 py-6 ">
    //         <h2 className="text-xl font-semibold ">Travelling Site</h2>
    //       </div>
    //     </div>
    //     {/* AutoPro Car Website Card */}
    //     <div className="card rounded-md w-96 bg-base-100 shadow-xl">
    //       <div className="portfolio-container hvr-rectangle-out">
    //         <figure className="px-4 pt-4">
    //           <img
    //             className="h-60 w-full opacity-100 rounded-md"
    //             src={AutoProCar}
    //             alt="Travelling Site"
    //           />
    //         </figure>

    //         <div className="middle-hovor-button border-2 rounded-full px-6 py-2 text-xl hover:bg-gradient-to-r from-[#07f7f7] to-transparent">
    //           <a
    //             href="https://fast-drive-nayem.netlify.app/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Go Livesite
    //             {/* <i className="fa-sharp fa-solid fa-up-right-from-square"></i> */}
    //             <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
    //           </a>
    //         </div>
    //       </div>

    //       <div className="px-4 py-6 ">
    //         <h2 className="text-xl font-semibold ">AutoPro Car Website</h2>
    //       </div>
    //     </div>

    //     {/* DentalCare Website Card */}
    //     <div className="card rounded-md w-96 bg-base-100 shadow-xl">
    //       <div className="portfolio-container hvr-rectangle-out">
    //         <figure className="px-4 pt-4">
    //           <img
    //             className="h-60 w-full opacity-100 rounded-md"
    //             src={DentalCare}
    //             alt="Travelling Site"
    //           />
    //         </figure>

    //         <div className="middle-hovor-button border-2 rounded-full px-6 py-2 text-xl hover:bg-gradient-to-r from-[#07f7f7] to-transparent">
    //           <a
    //             href="https://medicare-nayem.netlify.app/"
    //             target="_blank"
    //             rel="noreferrer"
    //           >
    //             Go Livesite
    //             {/* <i className="fa-sharp fa-solid fa-up-right-from-square"></i> */}
    //             <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
    //           </a>
    //         </div>
    //       </div>

    //       <div className="px-4 py-6 ">
    //         <h2 className="text-xl font-semibold ">Dental Care</h2>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="portfolio" className="lg:mx-14 pb-14">
      <h1 className="heading pb-14">Some of My Work</h1>
      <div className="grid grid-flow-row gap-10 justify-items-center ">
        {/* Travelling website Card */}
        <div className="card lg:card-side rounded-md bg-base-100 shadow-xl w-4/5">
          <div className="portfolio-container hvr-rectangle-out">
            <figure className="">
              <img
                className="h-72 opacity-100 rounded-md"
                src={TravelSite}
                alt="Travelling Site"
              />
            </figure>

            <div className="middle-hovor-button border-2 rounded-full px-6 py-2 text-xl hover:bg-gradient-to-r from-[#07f7f7] to-transparent">
              <a
                href="https://travel-go-nayem.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Go Livesite
                {/* <i className="fa-sharp fa-solid fa-up-right-from-square"></i> */}
                <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="card-body lg:w-3/5">
            <h2 className="card-title">Travelling Site</h2>
            <p className="text-justify">
              This is an online tourism service platform. Users can book a
              travel package & also cancel the order. Admin can add a new travel
              package and update the customer's orders.
            </p>
            <h3>Used Stack:</h3>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">HTML5</div>
              <div className="badge badge-outline">CSS3</div>
              <div className="badge badge-outline">Bootstrap5</div>
              <div className="badge badge-outline">React.js</div>
              <div className="badge badge-outline">React Router</div>
              <div className="badge badge-outline">React Hook Form</div>
              <div className="badge badge-outline">Axios</div>
              <div className="badge badge-outline">Node</div>
              <div className="badge badge-outline">Express</div>
              <div className="badge badge-outline">MongoDB</div>
            </div>
          </div>
        </div>

        {/* AutoPro Car Website Card */}
        <div className="card lg:card-side rounded-md bg-base-100 shadow-xl w-4/5 ">
          <div className="portfolio-container hvr-rectangle-out">
            <figure className="">
              <img
                className="h-72 opacity-100 rounded-md"
                src={AutoProCar}
                alt="Travelling Site"
              />
            </figure>

            <div className="middle-hovor-button border-2 rounded-full px-6 py-2 text-xl hover:bg-gradient-to-r from-[#07f7f7] to-transparent">
              <a
                href="https://fast-drive-nayem.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Go Livesite
                {/* <i className="fa-sharp fa-solid fa-up-right-from-square"></i> */}
                <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="card-body lg:w-3/5">
            <h2 className="card-title">AutoPro Car Website</h2>
            <p className="text-justify">
              It’s an organized online CAR selling system website. Here is a
              dashboard for users & admin to maintain their activities. Admin
              can add new products, delete orders, & manage orders. Users can
              cancel the orders and give reviews for the products.
            </p>
            <h3>Used Stack:</h3>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">HTML5</div>
              <div className="badge badge-outline">CSS3</div>
              <div className="badge badge-outline">Bootstrap5</div>
              <div className="badge badge-outline">Firebase Authentication</div>
              <div className="badge badge-outline">React.js</div>
              <div className="badge badge-outline">React Router</div>
              <div className="badge badge-outline">React Hook Form</div>
              <div className="badge badge-outline">Axios</div>
              <div className="badge badge-outline">Node</div>
              <div className="badge badge-outline">Express</div>
              <div className="badge badge-outline">MongoDB</div>
            </div>
          </div>
        </div>

        {/* DentalCare Website Card */}
        <div className="card lg:card-side rounded-md bg-base-100 shadow-xl w-4/5">
          <div className="portfolio-container hvr-rectangle-out">
            <figure className="">
              <img
                className="h-72 opacity-100 rounded-md"
                src={DentalCare}
                alt="Travelling Site"
              />
            </figure>

            <div className="middle-hovor-button border-2 rounded-full px-6 py-2 text-xl hover:bg-gradient-to-r from-[#07f7f7] to-transparent">
              <a
                href="https://medicare-nayem.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Go Livesite
                {/* <i className="fa-sharp fa-solid fa-up-right-from-square"></i> */}
                <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="card-body lg:w-3/5">
            <h2 className="card-title">DentalCare Website</h2>
            <p className="text-justify">
              This is an online dental treatment services platform. Users can
              take an appointment with any doctor for a specific dental
              treatment and can see all consultant profiles.
            </p>
            <h3>Used Stack:</h3>
            <div className="card-actions justify-start">
              <div className="badge badge-outline">HTML5</div>
              <div className="badge badge-outline">CSS3</div>
              <div className="badge badge-outline">Bootstrap5</div>
              <div className="badge badge-outline">React.js</div>
              <div className="badge badge-outline">React Router</div>
              <div className="badge badge-outline">Node</div>
              <div className="badge badge-outline">Express</div>
              <div className="badge badge-outline">MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
