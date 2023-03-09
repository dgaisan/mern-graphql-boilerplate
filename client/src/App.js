import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Home from "./pages/Home";
import PageNotfound from "./pages/404";
import Author from "./pages/Author";

const client = new ApolloClient({
  uri: "http://localhost:3003/api",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/author/:authorId" element={<Author/>} />
              <Route path="*" element={<PageNotfound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
