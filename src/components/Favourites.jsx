import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { removeFavorite } from "../redux/actions";

const Favourites = () => {
  const navigate = useNavigate();
  const favouritesJobs = useSelector((state) => state.favorites.jobs);
  const dispatch = useDispatch();

  return (
    <div>
      {favouritesJobs.map((job, i) => (
        <ul key={job._id}>
          <li>
            <div>{job.title}</div>
            <div>{job.company_name}</div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                dispatch(removeFavorite(i));
              }}
            >
              Delete
            </Button>
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
