import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context";
import { Navbar } from "./components/navbar";
import { MainPage } from "./pages/main-page/main-page";
import { Category } from "./pages/category/category";
import { NotFoundPage } from "./pages/not-found/not-found";
import { Element } from "./pages/element/element";
import characters from "./db/characters.json";
import episodes from "./db/episode.json";
import locations from "./db/location.json";
import "./App.css";

function App() {
  const context = { characters, episodes, locations };
  return (
    <AppContext value={context}>
      <div className="flex flex-col h-screen box-border">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<Element />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </AppContext>
  );
}

export default App;
