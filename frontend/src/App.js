import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Home from "./pages/home/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route index element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
