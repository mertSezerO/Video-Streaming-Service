export default function MovieItem({ movie }) {
  return (
    <div className="item">
      <img src={movie.poster} alt="" />
      <h3>{movie.title}</h3>
    </div>
  );
}
