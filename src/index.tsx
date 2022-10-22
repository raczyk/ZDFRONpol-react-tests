import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EmployeesList from './EmployeesList';
import EmployeePage from './EmployeePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees-list",
    element: <EmployeesList />,
  },
  {
    path: "/employee/:id",
    element: <EmployeePage  />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement ).render(

    <RouterProvider router={router} />

);
