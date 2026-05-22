import { useState } from "react";
import { Logout } from "./Logoutpage";

function HomePage({ name }) {
  const [logout, setLogout] = useState(false);

  function logoutpage() {
    setLogout(true);
  }

  if (logout) {
    return <Logout />;
  }

  return (
    <>
      <div className="home-container">
        <h1>Welcome {name}</h1>

        <button className="btn" onClick={logoutpage}>
          Logout
        </button>
      </div>
    </>
  );
}

export { HomePage };
