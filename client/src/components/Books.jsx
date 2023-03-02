import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      id
      name
      yearPublished
    }
  }
`;

export default function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) {
    return <>Error!</>;
  }
  if (loading) {
    return <>Books Data Loading... </>;
  }

  console.log(`data = ${data}`);
  console.log(data);


  return <div>Books displayed here.</div>;
}
