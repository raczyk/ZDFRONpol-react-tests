import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeesListPage from "./pages/EmployeesListPage";
import EmployeePage from "./pages/EmployeePage";
import Page from "./pages/Page";
import ContactFormPage from "./pages/ContactFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/employees-list",
    element: <EmployeesListPage />,
  },
  {
    path: "/employee/:id",
    element: <EmployeePage />,
  },
  {
    path: "/contact",
    element: <ContactFormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Page>
    <RouterProvider router={router} />
  </Page>
);
