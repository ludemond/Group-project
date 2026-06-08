import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <div style={{width:38,height:38,background:'#6ee7b7',borderRadius:8}}></div>
                <h1>Movie Watchlist</h1>
            </div>
            <ul className="nav-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/watchlist">Watchlist</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;