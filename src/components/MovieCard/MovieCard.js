import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import defaultPoster from "../../assets/default-poster.png";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, match, location }) => (
  <li>
    <Link
      to={{
        pathname: `${match}/${movie.id}`,
        state: { from: location },
      }}
      className="MoviesGalleryItem"
    >
      <img
        src={
          movie.poster_path
            ? `${baseImgUrl}${movie.poster_path}`
            : defaultPoster
        }
        alt={movie.original_title}
        width="150"
        className="MoviesGalleryItemImage"
      />
      <p className="MoviesGalleryTitle">{movie.original_title}</p>
      <div>Rating: {movie.vote_average}</div>
    </Link>
  </li>
);

export default MovieCard;

MovieCard.propTypes = {
  movies: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
      })
    ),
    PropTypes.array,
  ]),
};
