import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ name, image, style }) => {
  return (
    <motion.div
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
      whileHover={{ y: -5 }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "#333",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
