import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Register service worker (production builds only)
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    // Optionally prompt user to refresh
    console.log("SW updated", registration);
  },
}).catch(error => {
  console.error('SW registration failed:', error);
});
