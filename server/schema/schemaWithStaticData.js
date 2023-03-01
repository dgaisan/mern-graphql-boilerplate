// This Schema fetches data from a static data source.

const { authors, books } = require("../sampleData");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    born: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        return books.filter((book) => book.authorId === parent.id);
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    authorId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    yearPublished: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return authors.find((client) => client.id === parent.authorId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent) {
        return authors;
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve: authorResolver,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return books;
      },
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books.find((project) => project.id === args.id);
      },
    },
  },
});

function authorResolver(parent, args) {
  return authors.find((client) => client.id === args.id);
}

module.exports = new GraphQLSchema({
  query: RootQuery,
});
