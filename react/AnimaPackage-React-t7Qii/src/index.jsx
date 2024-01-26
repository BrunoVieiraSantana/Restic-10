import React from "react";
import ReactDOMClient from "react-dom/client";
import { TelaHomeMobile } from "./screens/TelaHomeMobile";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<TelaHomeMobile />);
