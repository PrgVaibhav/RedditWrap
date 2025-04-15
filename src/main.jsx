import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SubredditProvider } from "./context/subredditContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SubredditProvider>
      <App />
    </SubredditProvider>
  </StrictMode>
);
