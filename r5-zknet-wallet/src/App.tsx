import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ButtonPrimary, ButtonSecondary, Link } from "./theme";

function App() {
  return (
    <div className="App">
      <h1>R5 ZKNet Wallet</h1>
      <ButtonPrimary>Primary Button</ButtonPrimary>
      <ButtonSecondary>Secondary Button</ButtonSecondary>
      <Link href="#">Link</Link>
      Text
    </div>
  );
}

export default App;
