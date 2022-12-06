import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getJobs } from "../redux/actions";

const MainSearch = () => {
  const navigate = useNavigate();
  const favouritesLength = useSelector((state) => state.favorites.jobs.length);
  const jobs = useSelector((state) => state.search.searchJobs);
  const jobsLength = useSelector((state) => state.search.searchJobs.length);
  const isLoading = useSelector((state) => state.search.isLoading);
  const isError = useSelector((state) => state.search.isError);
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getJobs(query));

    // try {
    //   const response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //     console.log(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={2} className="mx-auto my-3">
          <Button
            variant="warning"
            onClick={() => {
              navigate("/favourites");
            }}
          >
            Favourites{favouritesLength}
          </Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
          <h4 className="mt-4">Search Results {jobsLength}</h4>

          {isError && (
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            </Alert>
          )}
        </Col>

        {isLoading && <Spinner animation="grow" />}

        <Col xs={10} className="mx-auto mb-5">
          {jobs && jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
