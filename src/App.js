import React, { useState } from "react";
import Portfolio from "./components/Portfolio";

function App() {
  const [onLoad, setOnLoad] = useState(false);

  return <Portfolio onLoad={onLoad} setOnLoad={setOnLoad} />;
}

export default App;
