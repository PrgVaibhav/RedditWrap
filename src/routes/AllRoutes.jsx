import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components";
import { Home, Saved } from "../pages";

export const AllRoutes = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "saved", element: <Saved /> },
        { path: "search", element: <>Search</> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};
