import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("aneis");
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

      <Footer />
    </div>
  );
}

export default App;
