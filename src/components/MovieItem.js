import React from "react";

const MovieItem = ({ movie }) => {
    return (
        <div>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <p>Rating: {movie.vote_average} </p>
        </div>
    );
};

export default MovieItem;
