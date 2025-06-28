import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("anéis");
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="app">
      <Header toggleAbout={toggleAbout} />

      <AnimatePresence mode="wait">
        {showAbout ? (
          <About key="about" toggleAbout={toggleAbout} />
        ) : (
          <NavTabs
            key="navtabs"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </AnimatePresence>
      <Link to="http://wa.me/5521971084546" className="whatsapp-link">
        <img
          src="whatsapp.svg"
          alt="whatsapp"
          className="wtsp"
          style={{
            display: "grid",
            height: "5rem",
            justifyContent: "center",
            alignItems: "end",
            position: "fixed",
            bottom: "8rem",
            right: "1rem",
            zIndex: "1000",
          }}
        />
      </Link>
      <Footer />
    </div>
  );
}

export default App;
