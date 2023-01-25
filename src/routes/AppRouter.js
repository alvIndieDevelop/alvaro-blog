import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// pages
import HomePage from "./../pages/Home";
import ResumenPage from "../pages/Resumen";
import BlogPage from "./../pages/Blog";
import ArticlePage from "./../pages/Article";
import MainMenu from "./../components/MainMenu";

const { PUBLIC_URL } = process.env;

const AppRouter = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route index element={<HomePage />} />
          <Route path="resumen" element={<ResumenPage />} />
          <Route path="blog">
            <Route index path="" element={<BlogPage />} />
            <Route path=":slug" element={<ArticlePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
