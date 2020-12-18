import React, { useState, useEffect } from "react";

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
      <Feature text={result} />
      <a href="https://github.com/login/oauth/authorize?client_id=79f0eb09798bde55df9e">
        Sign In with GitHub
      </a>
    </>
  );
}

export default App;
