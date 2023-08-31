export default function PopularMovieItem({ movie, index }) {
  return (
    <div className="foreground-item">
      <section>{index}</section>
      <img src={movie.poster} alt="" />
      <h3>{movie.original_title}</h3>
    </div>
  );
}
