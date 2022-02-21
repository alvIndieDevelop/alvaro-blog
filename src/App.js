import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

const App = () => {
  const elements = useRoutes(routes);

  return <>{elements}</>;
};

export default App;
