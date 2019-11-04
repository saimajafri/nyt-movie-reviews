import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";


const MOVIE_API_URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=d19OP2Xgw1dikyxN4aux4pUJyXmue7jF";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.results);
        setLoading(false);
      });
  }, []);

    const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchValue}&api-key=d19OP2Xgw1dikyxN4aux4pUJyXmue7jF`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.results !== []) {
          setMovies(jsonResponse.results);
          setLoading(false);
        } else {
          setErrorMessage("No results found!");
          setLoading(false);
        }
      });
  	};

    return (
     <div className="App">
      <Header text="NYT Movie Review Search Engine" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.display_title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};


export default App;