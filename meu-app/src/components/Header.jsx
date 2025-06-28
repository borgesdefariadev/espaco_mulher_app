import { Link } from "react-router-dom";

const Header = ({ toggleAbout }) => {
  return (
    <header
      className="header"
      style={{
        backgroundColor: "#E0D0D0",
        width: "100%",
        height: "4rem",
        display: "flex",
        justifyContent: "space-between", // Distribui os itens nas extremidades
        alignItems: "center", // Centraliza verticalmente
        padding: "0 1rem", // Adiciona um pouco de espaço nas laterais
      }}
    >
      {/* Logo no canto esquerdo */}
      <Link
        to="/sua-rota"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/"; // Isso causará um recarregamento
        }}
        className="logo-link"
      >
        <img
          src="logo.svg"
          alt="bijoux"
          className="logo"
          style={{
            height: "5rem",
            marginLeft: "-20px", // Ajuste fino para alinhamento visual
          }}
        />
      </Link>

      {/* Botão no canto direito */}
      <button
        onClick={toggleAbout}
        className="btn"
        style={{
          marginRight: "1rem", // Espaçamento do canto direito
        }}
      >
        Sobre Nós
      </button>
    </header>
  );
};

export default Header;
