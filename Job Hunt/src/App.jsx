import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Homepage from "./pages/Homepage/Homepage";
import Auth from "./pages/Auth/Auth";
import CandidateSearch from "./pages/CandidateSearch/CandidateSearch";
import { Error } from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/authentication" element={<Auth />} />
          <Route path="/candidate-search" element={<CandidateSearch />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
