import "./index.css";
import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    // Check if both first and last names are filled before submitting
    if (first.trim() !== "" && last.trim() !== "") {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <form>
        <h1>Full Name Display</h1>

        <div>
          Full Name <input type="text" onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div>
          Last Name <input type="text" onChange={(e) => setLast(e.target.value)} />
        </div>

        <button type="submit" onClick={SubmitHandler} disabled={!first.trim() || !last.trim()}>
          Submit
        </button>
      </form>

      {isSubmitted ? (
        <div>{`Full Name: ${first} ${last}`}</div>
      ) : (
        <div>Please fill in both first and last names before submitting.</div>
      )}
    </div>
  );
}
