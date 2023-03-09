const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const BookModel = require("./../models/Book");
const AuthorModel = require("./../models/Author");

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
        return BookModel.find({authorId: parent.id});
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

const query = new GraphQLObjectType({
  name: "RootQuery",
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
      },
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

const mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        born: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args) {
        const author = new AuthorModel({
          name: args.name,
          born: args.born,
          email: args.email,
          phone: args.phone,
        });
        return author.save();
      },
    },
    deleteAuthor: {
      type: AuthorType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return AuthorModel.findByIdAndRemove(args.id);
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        yearPublished: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLID },
      },
      resolve(parent, args) {
        const book = new BookModel({
          name: args.name,
          description: args.description,
          yearPublished: args.yearPublished,
          authorId: args.authorId,
        });
        return book.save();
      },
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return BookModel.findByIdAndRemove(args.id);
      },
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { id, name, description } = args;
        return BookModel.findByIdAndUpdate(id, {
          $set: {
            name,
            description
          },
        }, {
          new: true
        });
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
