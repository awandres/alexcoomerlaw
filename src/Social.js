import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import axios from 'axios';





class Social extends Component {



  render() {


    return (
      <div id="body">

        <div class="social-container">
        <h2 class="headlines">Find Me On</h2>
        <div class="social-container-row">
          <a href="https://www.facebook.com/alexcoomerlawtucson" target="_blank"><img alt="Alex Coomer Facebook Page" width="100px" src="assets/img/facebook.svg" /></a>

          <a href="https://www.linkedin.com/in/alexcoomer/" target="_blank"><img alt="Alex Coomer LinkedIn Page" width="100px"  src="assets/img/linkedin.svg" /></a>

          <a href="https://www.avvo.com/attorneys/85754-az-richard-coomer-4675275.html" target="_blank"><img alt="Alex Coomer Avvo Page" width="100px"  src="assets/img/avvo-logo-3.png" /></a>
        </div>
        </div>

      </div>

    );
  }
}

export default Social;
