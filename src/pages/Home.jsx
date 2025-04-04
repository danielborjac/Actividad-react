import { Link } from "react-router-dom";
import useFetchMovies from "../useFetchMovies";

function Home() {
  const { data: movies, loading, error } = useFetchMovies("/movie/popular");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las películas.</p>;

  return (
    <div>
      <h1>Películas Populares</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;