import React from "react";
import Form from "./Form";
import Login from "./Login";

const userIsRegistered = true;

function App() {

  return (
    <div className="container">
      {userIsRegistered ? <Login />: <Form />}
    </div>
  );
}

export default App;
