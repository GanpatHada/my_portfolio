import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Alert from "./components/alert/Alert";
import {useRef, useState } from "react";
import "aos/dist/aos.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import SpotifyComponent from "./pages/spotify/SpotifyComponent";


const App = () => {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollTop = scrollElement.scrollTop;
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;
      const totalHight = scrollHeight - clientHeight;
      const progress = (scrollTop / totalHight) * 100;
      setProgress(progress);
    }
  };

  
  return (
    <main>
      <Alert />
      <Navbar />
      <div id="scroll-progress-track">
        <span id="scroll-progress" style={{ width: `${progress}%` }} />
      </div>
      <div id="content" ref={scrollRef} onScroll={handleScroll}>
        <Routes>
                 <Route path="/spotify" element={<SpotifyComponent />} />
                 <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
