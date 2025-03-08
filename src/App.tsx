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
import { AuthProvider } from "./context/AuthProvider";
import { LoginPage } from "./pages/login-page/login-page";
import { PrivateRoute } from "./components/private-route";

function App() {
  const context = { characters, episodes, locations };
  return (
    <AuthProvider>
      <AppContext value={context}>
        <div className="flex flex-col h-screen box-border">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/:category"
              element={
                <PrivateRoute>
                  <Category />
                </PrivateRoute>
              }
            />
            <Route
              path="/:category/:id"
              element={
                <PrivateRoute>
                  <Element />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AppContext>
    </AuthProvider>
  );
}

export default App;
