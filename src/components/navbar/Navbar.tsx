import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-full">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nav-bar"
          aria-controls="nav-bar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav-bar">
          <ul
            className="nav navbar-nav mr-auto mt-2 mt-lg-0 nav-pills"
            role="tablist"
          >
            <li className="nav-item">
              <Link /* className="nav-link user-name" */ href="/" passHref>
                <h3 className="site-name">MAJSIN</h3>
              </Link>
              <li role="presentation" className="nav-item effect">
                <Link /* className="nav-link" */ href="/products" passHref>
                  <i
                    style={{ paddingTop: "2.5px" }}
                    id="icon1"
                    className="fa fa-list fa-2x navbar-icon"
                  />
                </Link>
              </li>

              <li role="presentation" className="nav-item effect">
                <Link /* className="nav-link" */ href="#" passHref>
                  <i className="fa fa-envelope fa-2x navbar-icon" />
                </Link>
              </li>

              <li role="presentation" className="nav-item effect">
                <Link /* className="nav-link" */ href="#" passHref>
                  <i className="fa fa-globe fa-2x navbar-icon" />
                </Link>
              </li>

              <li role="presentation" className="nav-item effect">
                <Link /* className="nav-link" */ href="/products/new" passHref>
                  <i className="fa fa-plus fa-2x navbar-icon" />
                </Link>
              </li>
            </li>

            <div>
              <ul className="arrows form-inline my-2 my-lg-0">
                <li className="nav-item effect">
                  <Link /* className="nav-link" */ href="/login" passHref>
                    <h5>
                      <i className="fa fa-sign-in fa-2x navbar-icon" />
                    </h5>
                  </Link>
                </li>
                <li className="nav-item effect">
                  <Link /* className="nav-link" */ href="#" passHref>
                    <h5>
                      <i className="fa fa-sign-out fa-2x navbar-icon" />
                    </h5>
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
