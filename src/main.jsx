import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Status from './components/status/Status.jsx';
import Energy from './components/Energy.jsx';
import Menu from './components/Menu.jsx';
import ErrorPage from './shared/ErrorPage.jsx';
import Array from './components/Array.jsx';
import Login from './components/Login.jsx';
import { ProtectedRoute } from './hooks/ProtectedRoute.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/status",
    element: <ProtectedRoute><Status /></ProtectedRoute>,
  },
  {
    path: "/energy",
    element: <Energy/>,
  },
  {
    path: "/menu",
    element: <Menu/>,
  },
  {
    path: "/array",
    element: <Array/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

