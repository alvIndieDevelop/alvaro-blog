import HomePage from "./../pages/Home";
import ResumenPage from "../pages/Resumen";

import LoginPage from "../pages/auth/Login";

import MainMenu from "./../components/MainMenu";

export const routes = [
  {
    path: "/",
    element: <MainMenu />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/resumen",
        element: <ResumenPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];
