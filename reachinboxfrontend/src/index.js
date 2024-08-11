import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Auth0Provider
         domain="dev-prfkm8njqogp6smw.us.auth0.com"
         clientId="BK5RMpv1CbuU5jPeOFXBubZUVSDpPSO1"
         authorizationParams={{
           redirect_uri: "http://localhost:3000" // Ensure this matches the callback URL in Auth0
         }}
      >
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0Provider>
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
