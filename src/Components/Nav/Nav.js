import React from 'react';
import "./Nav.css";


const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid nav-cont">
    <a className="navbar-brand text-white" href="#">TAMILANADU TOURISAM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto  me-2 ">
        <li className="nav-item p-2">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="#">Places to Visit</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white" href="#">Best Time to Visit</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white ">Packages</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white">Destinations</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link text-white">Food</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav