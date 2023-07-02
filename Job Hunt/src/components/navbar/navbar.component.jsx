import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToAuthentication = () => {
    navigate("/authentication");
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        JobHunt
      </Link>
      <div className="menu">
        <Link to="/career-fair">Career Fair</Link>
        <Link to="/skill-tests">Skill tests</Link>
        <Link to="/resume-builder">Resume builder</Link>
        <Link to="/services">Services</Link>
      </div>

      <Button
        type="button"
        buttonType="google"
        onClick={navigateToAuthentication}
      >
        Login / SignUp
      </Button>
    </div>
  );
};

export default Navbar;
