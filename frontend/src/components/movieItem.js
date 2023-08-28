export default function MovieItem({ movie }) {
  return (
    <div className="item">
      <img src={movie.poster} alt="" />
      <h3>{movie.original_title}</h3>
    </div>
  );
}
