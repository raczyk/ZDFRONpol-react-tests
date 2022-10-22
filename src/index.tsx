import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EmployeesList from './EmployeesList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees-list",
    element: <EmployeesList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement ).render(

    <RouterProvider router={router} />

);
