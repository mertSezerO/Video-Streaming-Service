export default function GenrePageNavigator({
  direction,
  genre,
  setMovies,
  page,
  setPage,
}) {
  const effect = direction === "prev" ? -1 : 1;
  const noAction = direction === "prev" ? 1 : 5;

  function showDirection() {
    if (noAction !== page) {
      setPage(page + effect);
    }
    fetch(
      "http://localhost:5000/movies/find/genres?genre=" +
        genre +
        "&page=" +
        page,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((movies) => {
        movies.json().then(({ movies }) => {
          setMovies(movies);
          console.log(movies);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="direction-item">
      <button className="direction" onClick={showDirection}>
        {direction === "prev" ? "<" : ">"}
      </button>
    </div>
  );
}
