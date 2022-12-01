import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const navigate = useNavigate();
  const favouritesJobs = useSelector((state) => state.favorites.jobs);

  return (
    <div>
      {favouritesJobs.map((job) => (
        <ul>
          <li>
            <div>{job.title}</div>
            <div>{job.company_name}</div>
          </li>
        </ul>
      ))}

      <Button variant="info" onClick={() => navigate("/")}>
        {" "}
        Back{" "}
      </Button>
    </div>
  );
};

export default Favourites;
