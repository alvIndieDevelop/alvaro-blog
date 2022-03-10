import HomePage from "./../pages/Home";
import ResumenPage from "../pages/Resumen";
import DashboardPage from "../pages/admin/Dashboard";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import BlogPage from "./../pages/Blog";
import ArticlePage from "./../pages/Article";
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
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/blog",
        children: [
          {
            index: true,
            element: <BlogPage />,
          },
          {
            path: "/blog/:slug",
            element: <ArticlePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainMenu />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
];
