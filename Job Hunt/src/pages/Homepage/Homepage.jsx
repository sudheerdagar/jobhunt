import "./Homepage.scss";
import SearchBox from "../../components/search-box/search.component";
import sunderladki from "../../assets/sunderladki.png";
import fiverr from "../../assets/fiverr.png";
import Category from "../../components/category-card/Category.component";
import SolutionCard from "../../components/solution-card/SolutionCard.component";
import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="left">
          <h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Discover more than 10000+ Jobs")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Discover more than 10000+ Jobs")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </h1>
          {/* <h1>Discover more than 10000+ Jobs</h1> */}
          <p>
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>
          <SearchBox />
        </div>
        <div className="right">
          <img src={sunderladki} alt="" />
        </div>
      </div>

      <div className="featured">
        <h2>Companies we helped grow</h2>
        <div className="images">
          <img src={fiverr} alt="" data-aos="fade-right" />
          <img src={fiverr} alt="" data-aos="fade-up" />
          <img src={fiverr} alt="" data-aos="fade-up" />
          <img src={fiverr} alt="" data-aos="fade-up" />
          <img src={fiverr} alt="" data-aos="fade-left" />
        </div>
      </div>

      <div className="solution">
        <h2 data-aos="fade-in">Solutions we provide</h2>
        <div className="solution-card">
          <SolutionCard
            heading="Smart Candidate Filtering"
            details="Advanced algorithms analyze resumes, saving time by presenting a shortlist of highly relevant candidates."
          />
          <SolutionCard
            heading="Automated Job Posting"
            details="Reach a wider audience by automatically distributing job postings across multiple platforms."
          />
          <SolutionCard
            heading="Collaborative Hiring"
            details="Review and discuss candidates in a shared space, leaving comments, sharing feedback, and rating applicants."
          />
          <SolutionCard
            heading="Seamless Communication"
            details="Communicate with candidates in real-time within the platform, eliminating the need for external email threads."
          />
          <SolutionCard
            heading="Analytics and Reporting"
            details="Track recruitment metrics, analyze data on sourcing, time-to-hire, and conversion rates for data-driven decision-making."
          />
        </div>
      </div>

      <div className="explore">
        <h2>Explore by category</h2>

        <div className="category-card">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
