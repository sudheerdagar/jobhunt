import "./Error.scss";
import error from "../../assets/error.png";

export const Error = () => {
  return (
    <div className="error">
      <img src={error} alt="" />
    </div>
  );
};
