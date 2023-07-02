/* eslint-disable react/prop-types */
import "./Category.scss";
import DesignIcon from "../../assets/designIcon.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Category = ({ link }) => {
  return (
    <div className="category" data-aos="fade-up">
      <img src={DesignIcon} alt="Design Icon" />

      <div className="contents">
        <h3>Design</h3>
        <div className="details">
          <p>395+ jobs available</p>
          <Link to={link}>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
