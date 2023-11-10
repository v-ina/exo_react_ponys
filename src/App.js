import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Poneys from "./pages/Poneys"
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import PoneyTalk from "./pages/PoneyTalk";


function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/poneys" element={<Poneys />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/poneytalk" element={<PoneyTalk />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
