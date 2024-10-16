import HeaderBar from "./components/HeaderBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryNode from "./components/StoryNode";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <main className="flex flex-col justify-center items-stretch grow bg-antiflash-200 dark:bg-notblack-300 dark:text-antiflash-200">
          <Routes>
            <Route exact path="/" element={<StoryNode />} />
            <Route exact path="/:id" element={<StoryNode />} />
            <Route exact path="/ending/:id" element={<p>Ending</p>} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <h6 className="text-antiflash-200 text-center py-4 bg-notblack-500">Copyright &copy; Joel Robinson 2024</h6>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
