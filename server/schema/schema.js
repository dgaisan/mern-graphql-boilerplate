const { authors, books } = require("./../sampleData");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const BookModel = require('./../models/Book');
const AuthorModel = require('./../models/Author');

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
        // return books.filter((book) => book.authorId === parent.id);
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
        return AuthorModel.findById(parent.authorId);
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
        return AuthorModel.find();
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return AuthorModel.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return BookModel.find();
      },
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return BookModel.findById(args.id);
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
