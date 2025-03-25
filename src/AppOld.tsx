// import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import { AppContext } from "./context";
// import { AuthProvider } from "./context/AuthProvider";
// import characters from "./db/characters.json";
// import episodes from "./db/episode.json";
// import locations from "./db/location.json";
// import { Navbar } from "./components/navbar";
// import { PrivateRoute } from "./components/private-route";
// import "./App.css";
// import { ErrorBoundary } from "./components/error-boundary";

// const MainPage = lazy(() =>
//   import("./pages/main-page/main-page").then((module) => ({
//     default: module.MainPage,
//   }))
// );
// const Category = lazy(() =>
//   import("./pages/category/category").then((module) => ({
//     default: module.Category,
//   }))
// );
// const Element = lazy(() =>
//   import("./pages/element/element").then((module) => ({
//     default: module.Element,
//   }))
// );
// const LoginPage = lazy(() =>
//   import("./pages/login-page/login-page").then((module) => ({
//     default: module.LoginPage,
//   }))
// );
// const NotFoundPage = lazy(() =>
//   import("./pages/not-found/not-found").then((module) => ({
//     default: module.NotFoundPage,
//   }))
// );

// function App() {
//   const context = { characters, episodes, locations };

//   return (
//     <AuthProvider>
//       <AppContext value={context}>
//         <MantineProvider>
//           <div className="flex flex-col h-screen box-border">
//             <Navbar />
//             <Suspense fallback="Loading...">
//               <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route
//                   path="/:categoryName"
//                   element={
//                     <PrivateRoute>
//                       <ErrorBoundary>
//                         <Category />
//                       </ErrorBoundary>
//                     </PrivateRoute>
//                   }
//                 />
//                 <Route
//                   path="/:categoryName/:id"
//                   element={
//                     <PrivateRoute>
//                       <ErrorBoundary>
//                         <Element />
//                       </ErrorBoundary>
//                     </PrivateRoute>
//                   }
//                 />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="*" element={<NotFoundPage />} />
//               </Routes>
//             </Suspense>
//           </div>
//         </MantineProvider>
//       </AppContext>
//     </AuthProvider>
//   );
// }

// export default App;
