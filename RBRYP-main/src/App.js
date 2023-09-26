import "./App.css";
import Home from "./pages/home";
import Hotel from "./pages/hotel";
import Clothing from "./pages/clothing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
 <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/clothing" element={<Clothing />} />

      
      </Routes>
    </Router>
    </>
  );
}

export default App;
