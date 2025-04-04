import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchMovies from "../useFetchMovies";

function Search() {
  const [query, setQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const { data: movies, loading, error } = useFetchMovies(`/search/movie?query=${query}`, triggerSearch);

  const handleSearch = () => {
    setTriggerSearch(true);
  };

  return (
    <div>
      <h1>Buscar Películas</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      {loading && <p>Cargando...</p>}
      {error && <p>Error al buscar películas.</p>}
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

export default Search;


