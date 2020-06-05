// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import Footer from './Footer'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'

const routing = (
  <div>
  <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>
<Main />
<HashRouter>
<Footer />
</HashRouter>
</div>
);

ReactDOM.render(routing, document.getElementById("root"));
ReactDOM.render(
  routing,

  document.getElementById("root")

);
