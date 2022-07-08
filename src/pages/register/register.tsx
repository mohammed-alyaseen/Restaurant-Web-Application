import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Registering = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="center">JSON Object :</div>
      <h2 className="form-title">Registering</h2>
      <form className="form">
        <div className="form-border">
          <input
            className="form-control"
            name="Email"
            type="text"
            placeholder="Email"
            autoComplete="true"
          />
          <input
            className="form-control"
            name="Username"
            type="text"
            placeholder="Username"
            autoComplete="true"
          />
          <input
            className="form-control"
            name="Password"
            type="text"
            placeholder="Password"
          />
          <input
            className="btn btn-danger btn-block"
            type="submit"
            value="Insert"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Registering;
