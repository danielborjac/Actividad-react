"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      setError("Error al buscar películas");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Buscar Películas</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="movie-list">
        {movies?.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`}>
                <div className="movie-card">
                    <Image 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        width={500} 
                        height={750} 
                        layout="intrinsic"
                    />
                    <h3>{movie.title}</h3>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
}