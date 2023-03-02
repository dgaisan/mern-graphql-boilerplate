# mern-graphql-boilerplate
Boilerplate for MERN + GraphQL project


## In development mode (@see `NODE_ENV` prop in `.env` file) GraphiQL dashboard in available under: <domain_name>:<port>/api (ex. localhost:3003/api). 
example queries:

- Get all Authors
```
{
  authors {
    name
    born
  }
}
```

- Get all Books
```
{
  books {
    id
    name
    yearPublished
  }
}
``` 

- Get a book with a specific id
```
{
  book("id": "3") {
    name
    description
  }
}
```

- Create a new Author
```
mutation {
  addAuthor(name: "Miguel de Cervantes", born: "1547", email: "miguel@gmail.com", phone: "555-344-1111") {
    id
    name
  }
}
```