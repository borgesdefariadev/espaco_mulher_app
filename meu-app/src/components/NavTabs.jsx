import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";

const NavTabs = ({ activeTab, setActiveTab }) => {
  // Dados de exemplo para os produtos
  const products = {
    anéis: [
      { id: 1, name: "Trevo de Quatro folhas", image: "/aneis/anel1.jpg" },
      { id: 2, name: "Anel Gold Circle", image: "/aneis/anel2.jpg" },
      { id: 3, name: "Anéis Gold variados", image: "/aneis/anel3.jpg" },
      { id: 4, name: "Anéis Silver variados", image: "/aneis/anel4.jpg" },
    ],
    colares: [
      { id: 1, name: "Colar Gold Ivory", image: "/colares/colar1.jpg" },
      { id: 2, name: "Colar old Mirror", image: "/colares/colar2.jpg" },
      { id: 3, name: "Conjunto Full Moon", image: "/colares/colar3.jpg" },
      { id: 4, name: "Colares Heart", image: "/colares/colar4.jpg" },
    ],
    brincos: [
      { id: 1, name: "Brinco Nord Circle", image: "/brincos/brinco1.jpg" },
      { id: 2, name: "Brinco HeartSteel", image: "/brincos/brinco2.jpg" },
      { id: 3, name: "Brincos Gold", image: "/brincos/brinco3.jpg" },
      { id: 4, name: "Brincos Heart", image: "/brincos/brinco4.jpg" },
    ],
    pulseiras: [
      { id: 1, name: "Pulseira Butterfly", image: "/pulseiras/pulseira1.jpg" },
      { id: 2, name: "Pulseira Stripes", image: "/pulseiras/pulseira2.jpg" },
      {
        id: 3,
        name: "Bracelete Shiny",
        image: "/pulseiras/pulseira3.jpg",
      },
      { id: 4, name: "Pulseira Butterfly", image: "/pulseiras/pulseira4.jpg" },
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
        userSelect: "none",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "1px 0",
        alignItems: "center",
      }}
    >
      <div
        className="tabs"
        style={{
          width: "100%",
          height: "2.5rem",
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
              userSelect: "none",
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
                  userSelect: "none",
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
