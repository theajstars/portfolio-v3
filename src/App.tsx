import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </div>
  );
}
