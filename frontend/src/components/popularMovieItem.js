export default function PopularMovieItem({ movie, index }) {
  return (
    <div className="foreground-item">
      <section>
        <h1>{index}</h1>
      </section>
      <div className="foreground-item-content">
        <img src={movie.poster} alt="" />
        <h3>{movie.original_title}</h3>
      </div>
    </div>
  );
}
