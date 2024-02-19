import { useState } from "react";
import Charities from "./Views/Charities";
import { Button, Row, Col } from "antd";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>H2All</h1>
      <Charities />
    </>
  );
}

export default App;
