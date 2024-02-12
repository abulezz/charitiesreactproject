import { useState } from "react";
import Charities from "./Views/Charities";

function App() {
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <>
      <h1>H2All</h1>
      <Charities />
    </>
  );
}

export default App;
