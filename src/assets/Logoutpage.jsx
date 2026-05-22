import { useState } from "react";
import { Login } from "./LoginPage";

function Logout() {
  const [data, setData] = useState(false);

  function back() {
    setData(true);
  }

  if (data) {
    return <Login />;
  }

  return (
    <>
      <div className="logout-container">
        <h1>Logout Successful</h1>

        <button className="btn" onClick={back}>
          Back To Login
        </button>
      </div>
    </>
  );
}

export { Logout };
