# Movie Watchlist — React + Vite

A small React app (Vite) to track movies you want to watch, are watching, or have watched. This project was built as a course group project and demonstrates component-driven UI, basic state management, client-side routing, and local data handling.

## Features
- View all movies as responsive cards
- Add a movie via a form (title, year, rating, genre, poster URL, status, description)
- Update watch status (Plan to Watch, Watching, Watched)
- Delete movies from the list
- Filter by genre (UI filter wired to state)
- Movie details page scaffold (routing can be enabled)
- Polished UI with responsive layout and accessible controls

## Example data shape

```
{
	id: 1,
	title: "Black Panther",
	genre: "Action",
	year: 2018,
	status: "Watched",
	rating: 5,
	poster: "https://example.com/poster.jpg",
	description: "A superhero film about Wakanda and its protector."
}
```

## Project structure (important files)
- `src/App.jsx` — App root and global state
- `src/components/MovieList.jsx` — maps movies to cards
- `src/components/MovieCard.jsx` — single movie card (status, delete)
- `src/components/MovieForm.jsx` — form to add movies
- `src/components/MovieFilter.jsx` — filter controls
- `src/pages/MovieDetails.jsx` — movie details scaffold
- `src/App.css` — theme and component styling

## Setup & Run
1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

## Notes & Next steps
- Filtering UI for genre is wired; you can extend it to include status and rating filters.
- Routing is scaffolded — connect `react-router-dom` to enable per-movie pages (optional).
- Data persistence: consider using `localStorage` or a lightweight backend to persist the user's watchlist across sessions.

## Contributing
- Fork, create a feature branch, implement changes, open a PR. Keep commits focused and tests small.

## License
- MIT (add LICENSE file if needed)
