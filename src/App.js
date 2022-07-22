import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Loader, Membership, Facilities, Article } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
