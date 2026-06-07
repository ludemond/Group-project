function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <div style={{width:38,height:38,background:'#6ee7b7',borderRadius:8}}></div>
                <h1>Movie Watchlist</h1>
            </div>
            <ul className="nav-items">
                <li>Home</li>
                <li>Search</li>
                <li>Watchlist</li>
            </ul>
        </nav>
    );
}

export default Navbar;