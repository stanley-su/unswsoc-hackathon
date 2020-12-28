import React, { useState, useEffect } from 'react';

import NavBar from "./navbar/NavBar";
import Feature from "./feature/Feature";

function App() {
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("/project");
      const result = await response.json();

      setResult(result[0].title);
    })();
  }, []);

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
