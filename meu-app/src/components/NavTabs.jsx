import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const NavTabs = ({ activeTab, setActiveTab }) => {
  // Dados de exemplo para os produtos
  const products = {
    aneis: [
      { id: 1, name: "Anel de Diamante", image: "/aneis/anel1.jpg" },
      { id: 2, name: "Anel de Rubi", image: "/aneis/anel2.jpg" },
      { id: 3, name: "Anel de Ouro", image: "/aneis/anel3.jpg" },
      { id: 4, name: "Anel de Prata", image: "/aneis/anel4.jpg" },
      { id: 5, name: "Anel de Prata", image: "/aneis/anel5.jpg" },
    ],
    colares: [
      { id: 1, name: "Colar de Pérolas", image: "/colares/colar1.jpg" },
      { id: 2, name: "Colar de Diamante", image: "/colares/colar2.jpg" },
      { id: 3, name: "Colar de Ouro", image: "/colares/colar3.jpg" },
    ],
    brincos: [
      { id: 1, name: "Brincos de Prata", image: "/brincos/brinco1.jpg" },
      { id: 2, name: "Brincos de Ouro", image: "/brincos/brinco2.jpg" },
      { id: 3, name: "Brincos de Diamante", image: "/brincos/brinco3.jpg" },
      { id: 4, name: "Brincos de Pedra", image: "/brincos/brinco4.jpg" },
    ],
    pulseiras: [
      { id: 1, name: "Pulseira de Ouro", image: "/pulseiras/pulseira1.jpg" },
      { id: 2, name: "Pulseira de Prata", image: "/pulseiras/pulseira2.jpg" },
      {
        id: 3,
        name: "Pulseira de Diamante",
        image: "/pulseiras/pulseira3.jpg",
      },
    ],
  };

  // Animação para os produtos
  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Animação para o container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <div
      className="main-content"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "2rem 0",
        alignItems: "center",
      }}
    >
      <div
        className="tabs"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          borderBottom: "1px solid #E0D0D0",
        }}
      >
        {["Anéis", "Colares", "Brincos", "Pulseiras"].map((tab) => (
          <motion.button
            key={tab}
            className={`tab-btn ${
              activeTab === tab.toLowerCase() ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
            style={{
              padding: "0.5rem 1.5rem",
              margin: "0 0.5rem",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "1.1rem",
              color: activeTab === tab.toLowerCase() ? "#B595A0" : "#888",
              borderBottom:
                activeTab === tab.toLowerCase() ? "2px solid #B595A0" : "none",
              fontWeight: activeTab === tab.toLowerCase() ? "bold" : "normal",
              position: "relative",
            }}
            whileHover={{ color: "#B595A0" }}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "#B595A0",
                }}
                layoutId="underline"
              />
            )}
          </motion.button>
        ))}
      </div>

      <h2
        className="section-title"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#B595A0",
        }}
      >
        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 250px)",
            gap: "2rem",
            padding: "0 2rem",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {products[activeTab]?.map((product, index) => (
            <motion.div
              key={product.id}
              variants={productVariants}
              custom={index}
              style={{
                width: "250px",
                height: "300px",
              }}
            >
              <ProductCard
                name={product.name}
                image={product.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NavTabs;
