import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
          .then(response => response.json())
          .then(data => setMovie(data));
      }, [id]);
      
    if (!movie) return <div>Loading...</div>;
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>Rating: {movie.vote_average}</p>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
    );
};

export default MovieDetail;