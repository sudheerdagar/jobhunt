import "./search.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  const candidatesSearch = () => {
    navigate("/candidate-search");
  };

  return (
    <div className="search-box">
      <input type="text" placeholder="Search Candidate" />
      <Button type="button" buttonType="google" onClick={candidatesSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBox;
