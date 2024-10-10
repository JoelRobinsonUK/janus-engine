import { useState } from "react";
import StartNode from "./components/StartNode";
import HeaderBar from "./components/HeaderBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryNode from "./components/StoryNode";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <main className="flex flex-col justify-center items-center h-full py-12">
          <Routes>
            <Route exact path="/" element={<StartNode />} />
            <Route exact path="/gate/:id" element={<StoryNode />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
