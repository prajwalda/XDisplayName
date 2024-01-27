import "./index.css";
import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Check if both first and last names are filled before submitting
    if (first.trim() !== "" && last.trim() !== "") {
      setIsSubmitted(true);
      setErrorMessage("");
    } 
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Full Name Display</h1>

        <div>
          Full Name <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div>
          Last Name <input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}

      {isSubmitted && (
        <div>
          Full Name: {first} {last}
        </div>
      )}
    </div>
  );
}
