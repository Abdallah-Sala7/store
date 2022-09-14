import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>        
    </BrowserRouter>
  );
}

export default App;