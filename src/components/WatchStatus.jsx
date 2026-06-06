function WatchStatus({ status, onStatusChange }) {
  return (
    <div>
      <h3>Watch Status</h3>

      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="Want to Watch">Want to Watch</option>
        <option value="Watching">Watching</option>
        <option value="Watched">Watched</option>
      </select>
    </div>
  );
}

export default WatchStatus;