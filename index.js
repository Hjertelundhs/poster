const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('mongoDB connected...');
    return server.listen({ port: 5000 });
  })
  .then(res => {
    console.log(`port running at ${res.url}`);
  });
