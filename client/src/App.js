import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Books from "./components/Books";

const client = new ApolloClient({
  uri: "http://localhost:3003/api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <h3>Client App</h3>
          <Books />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
