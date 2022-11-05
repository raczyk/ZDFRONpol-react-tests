import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeesListPage from "./pages/EmployeesListPage";
import EmployeePage from "./pages/EmployeePage";
import Page from "./pages/Page";
import ContactFormPage from "./pages/ContactFormPage";
import LayoutDemo from "./pages/LayoutDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page children={undefined} />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactFormPage />,
        // loader: contactLoader,
      },
      {
        path: "/layout-demo",
        element: <LayoutDemo />,
      },
      {
        path: "/employees-list",
        element: <EmployeesListPage />,
      },
      {
        path: "/employee/:id",
        element: <EmployeePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
