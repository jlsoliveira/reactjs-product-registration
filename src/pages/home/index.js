import React from "react";

export default function Home(){
  return(
    <>
      <div className="container">
        <div className="jumbotron mt-5">
          <h1 className="display-3">Welcome!</h1>
          <p className="lead">This is a simple project for register products.</p>
          <hr className="my-4"/>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/product" role="button">New Product</a>
          </p>
        </div>
      </div>
    </>
  )
}