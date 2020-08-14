import React from "react";
import ReactDOM from "react-dom";

import { RestLink } from 'apollo-link-rest';

import { ApolloProvider } from '@apollo/client'

import { ApolloClient } from '@apollo/client'
import { InMemoryCache } from 'apollo-cache-inmemory'

import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const URL = "https://api.nytimes.com";

const restLink = new RestLink({
  uri: URL
});



const cache = new InMemoryCache({
  typePolicies: {
    // Type policy map
    addTypename: false,
    books: {
      results: {
        books: {
          fields: {
            title: {
              read(title) {
                console.log(title);
                return title.toLowerCase();
              },
            },
          },
        }
      }
    },
  },
});




const client = new ApolloClient({
  link: restLink,
  cache: cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
