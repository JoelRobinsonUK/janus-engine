import HeaderBar from "./components/HeaderBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryNode from "./pages/StoryNode";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Ending from "./pages/Ending";
import Credits from "./pages/Credits";

function App() {
  const [source, setSource] = useState("/sounds/storyAmbient.mp3");

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
        <footer className="text-antiflash-200 text-center p-4 bg-notblack-500 flex flex-col lg:flex-row items-center gap-4">
          <div className="grow"></div>
          <h6 className="">Copyright &copy; Joel Robinson 2024</h6>
          <a href="https://github.com/JoelRobinsonUK/janus-engine">
            <FontAwesomeIcon className="text-2xl" icon={faGithub} />
          </a>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
