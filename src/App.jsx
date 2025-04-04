import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetails";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;