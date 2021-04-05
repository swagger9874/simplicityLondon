import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {ApolloProvider, ApolloClient, InMemoryCache,from,HttpLink} from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if(graphQLErrors){
    graphQLErrors.map(({message}) => {
      alert(`Graphql Error: ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri : "https://simplicityhw.cotunnel.com/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : link,
  request : async operation => {
    operation.setContext({
      headers : {
        Authorization : `Bearer ${localStorage.getItem("authToken")}`
      }
    })
  }
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
