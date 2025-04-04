import Image from "next/image";

async function getMovieDetails(id) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const data = await res.json();
    return data;
  }
  
  export default async function MovieDetail({ params }) {
    const movie = await getMovieDetails(params.id);
  
    return (
      <div>
        <h1>{movie.title}</h1>
        <Image 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            width={500} 
            height={750} 
            layout="intrinsic"
        />
        <p>{movie.overview}</p>
        <p>Calificación: {movie.vote_average}</p>
      </div>
    );
  }