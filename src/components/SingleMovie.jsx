import { Button, Col } from "react-bootstrap";
import { withRouter } from "react-router";

const SingleMovie = ({ data, changeSelectedMovie, history }) => {
  return (
    <Col className="mb-2" key={data.imdbID}>
      <img
        className="img-fluid"
        src={data.Poster}
        alt="movie"
        onClick={() => {
          changeSelectedMovie(data.imdbID);
        }}
      />
      <Button onClick={() => history.push("/details/" + data.imdbID)}>
        Movie Details
      </Button>
    </Col>
  );
};

export default withRouter(SingleMovie);
