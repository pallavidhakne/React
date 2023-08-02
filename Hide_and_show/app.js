import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div>
      {status ? <h1>showing content</h1> : null}
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      <button onClick={() => setStatus(!status)}>combo</button>
    </div>
  );
}

export default App;
