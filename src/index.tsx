import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EmployeesListPage from './pages/EmployeesListPage';
import EmployeePage from './pages/EmployeePage';


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
    element: <EmployeePage  />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement ).render(
  <div id="page">
    <RouterProvider router={router} />
    </div>
);
