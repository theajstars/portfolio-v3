import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./styles/index.scss";

export default function App() {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
  return (
    <div className="App">
      <MantineProvider>
        <Navbar />
        <RouterProvider router={router}></RouterProvider>
      </MantineProvider>
    </div>
  );
}
