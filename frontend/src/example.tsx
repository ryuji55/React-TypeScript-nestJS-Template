// ExampleComponent.jsx
import { useEffect, useState } from "react";

export function Example() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/example")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <p>Response from NestJS: {message}</p>
    </div>
  );
}
