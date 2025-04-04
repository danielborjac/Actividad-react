import { useParams } from "react-router-dom";
import useFetchMovies from "../useFetchMovies";

function MovieDetail() {
  const { id } = useParams();
  const { data: movie, loading, error } = useFetchMovies(`/movie/${id}`);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar la película.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Calificación: {movie.vote_average}</p>
    </div>
  );
}

export default MovieDetail;