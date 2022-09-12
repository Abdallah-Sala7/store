import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Nav />

    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
    </>
  );
}

export default App;
