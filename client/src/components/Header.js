import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  return (
    <header className="profile__header">
      <nav className="profile__nav">
        <h2>Stats {!!data ? `for ${data}`: null}</h2>
        <div className="profile__links">
          <Link to="/" className="home__link">
            Home
          </Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
