import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Product from "./components/product/Product";
import Details from "./components/details/Details";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />        
    </BrowserRouter>
  );
}

export default App;