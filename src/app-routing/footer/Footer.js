import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer text-faded text-center py-5">
          <div class="container">
            <p class="m-0 small">Copyright &copy; Your Website 2018</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
