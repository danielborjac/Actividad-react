import Link from "next/link";
import Image from "next/image";

async function getPopularMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  console.log(process.env.NEXT_PUBLIC_API_KEY);
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  
  const movies = await getPopularMovies();

  return (
    <div>
      <h1>Películas Populares</h1>
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