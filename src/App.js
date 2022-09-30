import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home"
import Product from "./pages/product/Product";
import Details from "./pages/details/Details";
import Cart from "./pages/cart/Cart";
import Account from "./pages/account/account";
import AccountInfo from "./pages/account/accountInfo";
import Wishlist from "./pages/account/wishlist";
import Order from "./pages/account/order";
import ChangeBilling from "./pages/account/changeBilling";
import ChangePassword from "./pages/account/changePassword";
import Checkout from "./pages/checkout/checkout";

function App() {
  return (
    <BrowserRouter>
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