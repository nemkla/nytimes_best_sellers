import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router" // react-router v4/v5
import { ConnectedRouter } from "connected-react-router";

import "./styles/index.css";
import App from "./App";
import Books from "./components/sections/Books";

import * as serviceWorker from "./serviceWorker";

import configureStore, { history } from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/books" component={Books} />
        </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
