const express = require('express');
const { graphqlHTTP }  = require('express-graphql');

require('dotenv').config();

const schema = require('./schema/schema');
const connectDb = require('./config/db');

const port = process.env.PORT || 3002;
const app = express();

connectDb();

app.use('/api', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'dev'
}));

app.listen(port, () => console.log(`Server running on ${port}`));