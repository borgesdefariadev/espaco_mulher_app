const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#B595A0",
        color: "white",
        padding: "1.5rem",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <div
        className="footer-content"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <p>
          © {new Date().getFullYear()} Espaço Mulher. Todos os direitos
          reservados.
        </p>
        <div className="footer-links" style={{ marginTop: "1rem" }}>
          <a
            href="http://wa.me/5521971084546"
            style={{ color: "white", margin: "0 1rem" }}
          >
            Contato
          </a>
          <a href="/termos" style={{ color: "white", margin: "0 1rem" }}>
            Termos de Serviço
          </a>
          <a href="/privacidade" style={{ color: "white", margin: "0 1rem" }}>
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
