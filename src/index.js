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
import fetchCategories from "./features/fetchCategories";

const store = configureStore();
store.dispatch(fetchCategories());

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

serviceWorker.unregister();
