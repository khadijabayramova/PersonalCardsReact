import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/index.jsx";
import Home from "./pages/Home";
import About from "./pages/About/index.jsx";
import Blog from "./pages/Blog/index.jsx";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
