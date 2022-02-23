import HomePage from "./../pages/Home";
import ResumenPage from "../pages/Resumen";

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
    ],
  },
];
