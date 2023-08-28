import MovieItem from "./movieItem";

export default function MovieList({ movies }) {
  return (
    <div className="item-list">
      {movies.map((movie) => (
        <MovieItem movie={movie} />
      ))}
    </div>
  );
}
