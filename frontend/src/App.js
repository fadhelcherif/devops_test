import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading backend...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Mon Projet DevOps</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;
