/* eslint-disable react/prop-types */
import "./user.scss";
import user from "../../assets/user.png";
import linkedin from "../../assets/linkedin.png";

const User = ({ name, email, link, role, location }) => {
  return (
    <div className="user">
      <img src={user} alt="" className="user-img" />
      <h3>{name}</h3>
      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
      <h4>{role}</h4>
      <h4>{location}</h4>
      <a href={link} target="blank">
        <img src={linkedin} alt="" className="linkedin" />
      </a>
    </div>
  );
};

export default User;
