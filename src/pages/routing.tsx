import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary, PrivateRoute } from "../components";

const MainPage = lazy(() =>
  import("../pages/main-page/main-page").then((module) => ({
    default: module.MainPage,
  }))
);
const Category = lazy(() =>
  import("../pages/category/category").then((module) => ({
    default: module.Category,
  }))
);
const Element = lazy(() =>
  import("../pages/element/element").then((module) => ({
    default: module.Element,
  }))
);
const LoginPage = lazy(() =>
  import("../pages/login-page/login-page").then((module) => ({
    default: module.LoginPage,
  }))
);
const NotFoundPage = lazy(() =>
  import("../pages/not-found/not-found").then((module) => ({
    default: module.NotFoundPage,
  }))
);

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/:categoryName"
        element={
          <PrivateRoute>
            <ErrorBoundary>
              <Category />
            </ErrorBoundary>
          </PrivateRoute>
        }
      />
      <Route
        path="/:categoryName/:id"
        element={
          <PrivateRoute>
            <ErrorBoundary>
              <Element />
            </ErrorBoundary>
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
