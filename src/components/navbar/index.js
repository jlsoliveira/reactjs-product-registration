import React from "react";
import { Link } from "react-router-dom"

function Navbar(){
  return(
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Products</a>
          <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarColor01" 
            aria-controls="navbarColor01" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Register Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search-product">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  )
}

export {Navbar};