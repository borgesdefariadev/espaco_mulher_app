import { motion } from "framer-motion";

const ProductCard = ({ name, image }) => {
  return (
    <motion.div
      className="product-card"
      style={{
        userSelect: "none",
        display: "grid",
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10, // Adicionei damping para melhorar a animação spring
      }}
    >
      <div
        className="product-image"
        style={{
          height: "16rem",
          width: "16rem",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F9F5F5",
        }}
      >
        <motion.img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease-out",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div
        className="product-info"
        style={{
          padding: "1rem",
          textAlign: "center",
          borderTop: "1px solid #E0D0D0",
        }}
      >
        <h3
          style={{
            color: "#B595A0",
            margin: "0 0 0.5rem 0", // Corrigi a margem
            fontSize: "1.2rem",
          }}
        >
          {name}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
