import "./index.css";
import { useState } from "react";

export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();

    // Check if both first and last names are filled before submitting
    if (first !== "" || last !== "") {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <h1>Full Name Display</h1>

        <div>
          Full Name <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div>
          Last Name <input type="text" value={last} onChange={(e) => setLast(e.target.value)} />
        </div>

        <button type="submit" >
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
