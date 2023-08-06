import "./Navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">
        <span>Thought Provocation</span>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/create">Create Blog</a>
      </div>
    </nav>
  );
};

export default NavBar;
