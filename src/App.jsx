import HeaderBar from "./components/HeaderBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import StoryNode from "./pages/StoryNode";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Ending from "./pages/Ending";
import Credits from "./pages/Credits";
import Footer from "./components/buttons/Footer";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <main className="flex flex-col justify-center items-stretch grow bg-antiflash-200 dark:bg-notblack-300 dark:text-antiflash-200">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/play/:id" element={<StoryNode />} />
            <Route exact path="/play/ending/:id" element={<Ending />} />
            <Route exact path="/play/credits" element={<Credits />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
