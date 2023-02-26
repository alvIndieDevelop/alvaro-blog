import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppRouter from "./routes/AppRouter";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themeOptions } from "./config/muiTheme";
import "./config/i18n";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback="conectando a la app...">
        <ThemeProvider theme={themeOptions}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
