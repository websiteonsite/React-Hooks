import React, { useState } from "react";


function App2() {

  const emailState = useState(' ');
  const email = emailState[0];
  const setEmail = emailState[1];

  const nameState = useState('');
  const name = nameState[0];
  const setName = nameState[1];

  function handleChange (e) {
    setEmail(e.target.value)
  }

  function handleChangeName (e) {
    setName(e.target.value)
  }
  return (

    <div className="App" style={{padding: 10 }}>
      <input value={email} onChange={handleChange} />
      <p>Email: {email} </p>
      <input value={name} onChange={handleChangeName} />
      <p>Name: {name} </p>
    </div>

  );
}

export default App2;
