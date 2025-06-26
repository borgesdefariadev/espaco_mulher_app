import { Link } from "react-router-dom";

const Header = ({ toggleAbout }) => {
  return (
    <header className="header" style={{ backgroundColor: "#E0D0D0" }}>
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src="" alt="" className="logo" style={{ height: "80px" }} />
        </Link>
        <h1 className="store-name">Espaço Mulher</h1>
        <button onClick={toggleAbout} className="about-btn btn">
          Sobre Nós
        </button>
      </div>
    </header>
  );
};

export default Header;
