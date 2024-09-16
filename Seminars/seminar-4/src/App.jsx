import { AboutPage } from "./components/AboutPage/AboutPage";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
)

export default App;
