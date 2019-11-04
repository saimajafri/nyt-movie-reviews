import React from "react";
import "./Movie.css";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.multimedia.src === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.multimedia.src;

  return (
    <div className="movie">
      <h2>{movie.display_title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.display_title}`}
          src={poster}
        />
      </div>
      <p>({movie.opening_date})</p>
    </div>
  );
};


export default Movie;