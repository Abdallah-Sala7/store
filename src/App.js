import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Product from "./pages/product/Product";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />        
    </BrowserRouter>
  );
}

export default App;