import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div className={styles.wrapper}>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className={styles.grid}>
            <div>
              <img src={movie.large_cover_image} alt="" />
            </div>
            <div className={styles.flex}>
              <h1 className={styles.title}>{movie.title}</h1>
              <span className={styles.mediumFont}>Year: {movie.year}</span>
              <span className={styles.mediumFont}>Rating: {movie.rating}</span>
              <span className={styles.mediumFont}>Genres</span>
              <ul className={styles.ul}>
                {movie.genres.map((genre, index) => (
                  <li className={styles.genres} key={index}>
                    - {genre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
