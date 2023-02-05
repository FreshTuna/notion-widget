import React, { useState } from 'react'
import Router from "./router";
import "./style/body.css";
import {BrowserRouter} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  )
}

export default App
