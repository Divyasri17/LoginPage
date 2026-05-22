import { useState } from "react";
import { HomePage } from "./HomePage";

function Login() {

  const userName = "Divya";
  const userEmail = "divya@gmail.com";
  const userPassword = "Divyasri17#";

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [val, setVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  function Change(e) {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function Submit(e) {

    e.preventDefault();

    const submittedData = data;

    if (
      submittedData.name === userName &&
      submittedData.email === userEmail &&
      submittedData.password === userPassword
    ) {

      setVal(submittedData);

    } else {

      alert("Entered data is wrong");

      setData({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  return (
    <>
      {
        val.name ?

        <HomePage name={val.name} />

        :

        <div className="login-container">

          <form className="form-box" onSubmit={Submit}>

            <h1>Login Page</h1>

            <input
              className="input-field"
              type="text"
              name="name"
              value={data.name}
              placeholder="Name..."
              onChange={Change}
            />

            <input
              className="input-field"
              type="text"
              name="email"
              value={data.email}
              placeholder="Email..."
              onChange={Change}
            />

            <input
              className="input-field"
              type="password"
              name="password"
              value={data.password}
              placeholder="Password..."
              onChange={Change}
            />

            <button className="btn" type="submit">
              Submit
            </button>

          </form>

        </div>
      }
    </>
  );
}

export { Login };