import { useEffect } from "react";
import { useState } from "react";

const MovieDetails = ({ match }) => {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(
          "http://www.omdbapi.com/?apikey=24ad60e9&i=" + match.params.movieID
        );
        if (resp.ok) {
          let data = await resp.json();
          console.log(data);
          setDetails(data);
        } else {
          console.log("error fetching details");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            match.params.movieID,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTUwNmRlY2RhMzE2MzAwMTVkNTEyM2YiLCJpYXQiOjE2MzI2NjA5NzIsImV4cCI6MTYzMzg3MDU3Mn0.vzSXzuRnbhUs7NjBPeeIiCBg6REuTwnoXE-R7Y-zU9Y",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          setComments(data);
        } else {
          console.log("error fetching comments");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    fetchComments();
  }, [match.params.movieID]);

  return (
    <div className="text-center text-white">
      {details && (
        <>
          <h2>{details.Title}</h2>
          <img src={details.Poster} alt="movie poster" />
          <ul style={{ listStyleType: "none" }}>
            {comments.map((c) => (
              <li className="my-3" key={c._id}>
                {c.comment}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
