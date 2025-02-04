import React from "react";

const LogIn = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        <p>
          Sign up for an account to save your exchange rates and get the latest exchange rates.
        </p>
        <button type="submit" className="btn btn-primary">Log In</button>
      </form>
    </div>
  );
}

export default LogIn;