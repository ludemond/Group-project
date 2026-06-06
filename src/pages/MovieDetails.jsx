import { useState } from "react";
import WatchStatus from "../components/WatchStatus";

function MovieDetails() {
  const [status, setStatus] = useState("Want to Watch");

  const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    status: status,
  };

  return (
    <div>
      <h1>{movie.title}</h1>

      <p>Year: {movie.year}</p>

      <p>Rating: {movie.rating}</p>

      <WatchStatus
        status={status}
        onStatusChange={setStatus}
      />

      <p>Current Status: {status}</p>
    </div>
  );
}

export default MovieDetails;