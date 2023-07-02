/* eslint-disable react/prop-types */
import "./SolutionCard.scss";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SolutionCard = ({ heading, details }) => {
  return (
    <div className="solutionCard" data-aos="fade-up">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <h3>{heading}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{details}</p>
            <a href="#">Explore</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
