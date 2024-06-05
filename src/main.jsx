import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TooltipProvider } from "./components/ui/tooltip.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={100}>
      <App />
    </TooltipProvider>
  </React.StrictMode>
);
