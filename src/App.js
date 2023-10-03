import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Route/AppRoutes";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";
import { useState } from "react";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;
