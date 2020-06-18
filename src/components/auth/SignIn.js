import React, {useState} from "react";

export default function SignIn(props) {

  const [state, setState] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  function handleChange(e) {
    const property = e.target.id;
    const value = e.target.value;
    setState(prev => {
      return(
        {...prev, [property]: value}
      )
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  )
}