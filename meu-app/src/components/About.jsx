import { motion } from "framer-motion";

const About = ({ toggleAbout }) => {
  return (
    <motion.div
      className="about-section"
      style={{
        backgroundColor: "#F9F5F5",
        padding: "2rem",
        minHeight: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="about-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h2
          className="section-title"
          style={{
            color: "#B595A0",
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "2rem",
          }}
        >
          Sobre Nossa Loja
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "#555" }}>
            Bem-vindo à Espaço Mulher, onde cada peça conta uma história.
            Fundada em XXXX, nossa loja se dedica a oferecer jóias finas e
            exclusivas, com materiais da mais alta qualidade.
          </p>
          <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "#555" }}>
            Cada jóia é cuidadosamente selecionada ou criada para atender aos
            mais altos padrões de excelência.
          </p>
          <p style={{ marginBottom: "2rem", lineHeight: "1.6", color: "#555" }}>
            Acreditamos que jóias são mais que acessórios - são expressões de
            personalidade, amor e momentos especiais. Estamos honrados em fazer
            parte da sua jornada.
          </p>
        </motion.div>

        <motion.button
          onClick={toggleAbout}
          className="btn"
          style={{
            display: "block",
            margin: "0 auto",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#B595A0",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s",
          }}
          whileHover={{
            backgroundColor: "#9d7e88",
            scale: 1.05,
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          Voltar para a Loja
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;
