import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { MainPage } from "./pages/main-page/main-page";
import { Category } from "./pages/category/category";

function App() {
  return (
    <div className="flex flex-col h-screen box-border">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
