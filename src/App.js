import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>        
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
