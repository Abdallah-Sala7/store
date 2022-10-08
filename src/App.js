import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home"
import Product from "./pages/product/product";
import Details from "./pages/details/details";
import Cart from "./pages/cart/cart";
import Account from "./pages/account/account";
import AccountInfo from "./pages/account/accountInfo";
import Wishlist from "./pages/account/wishlist";
import Order from "./pages/account/order";
import ChangeBilling from "./pages/account/changeBilling";
import ChangePassword from "./pages/account/changePassword";
import Checkout from "./pages/checkout/checkout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} >
          <Route index element={<AccountInfo />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="order" element={<Order />} />
          <Route path="changepassword" element={<ChangePassword /> } />
          <Route path="changebilling" element={<ChangeBilling/>} />
        </Route>
      </Routes>
      <Footer />        
    </BrowserRouter>
  );
}

export default App;