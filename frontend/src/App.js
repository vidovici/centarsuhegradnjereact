import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Project from "./pages/projects/Project";
import Contact from "./pages/contact/Contact";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
              <Route index element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
