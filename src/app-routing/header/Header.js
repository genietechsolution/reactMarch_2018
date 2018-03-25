import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,NavLink  } from "react-router-dom";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 class="site-heading text-center text-white d-none d-lg-block">
      <span class="site-heading-upper text-primary mb-3">A Free Bootstrap 4 Business Theme</span>
      <span class="site-heading-lower">Business Casual</span>
    </h1>

    <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
      <div class="container">
        <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
        
      
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active px-lg-4">
              <Link  class="nav-link text-uppercase text-expanded"  to="/">Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item px-lg-4">
              <Link  class="nav-link text-uppercase text-expanded"  to="/about">About</Link>
            </li>
            <li class="nav-item px-lg-4">
              <Link  class="nav-link text-uppercase text-expanded"  to="/products">Products</Link>
            </li>
            <li class="nav-item px-lg-4">
              <Link  class="nav-link text-uppercase text-expanded"  to="/store">Store</Link >
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Header;