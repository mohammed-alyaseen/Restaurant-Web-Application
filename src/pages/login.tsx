import Link from "next/link";
import React from "react";
import Navbar from "../components/navbar/Navbar";
// import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="center">JSON Object :</div>
      <h2 className="form-title">Login</h2>
      <form className="form">
        <div className="form-border">
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
          <label>
            IF you don&apos;t have an account then let us make one :{" "}
            <Link href="/registering">
              <a href="">Registering</a>
            </Link>
          </label>
        </div>
      </form>
    </>
  );
};

export default Login;
