import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="row">
            <h1 className="app-title text-center">UI - CRUD</h1>
          </div>
          <div className="row">
            <div className="col-sm-8 text-left">
              <h1 className="app-title">
                <Link to="/">
                  Users
                  <small>&nbsp; - CREATE | READ | UPDATE | DELETE</small>
                </Link>
              </h1>
            </div>
            <div className="col-sm-4 text-right">
              <NavLink to="/">
                <FontAwesomeIcon icon={faHome} />
              </NavLink>
              <NavLink to="/adduser">Add User</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
