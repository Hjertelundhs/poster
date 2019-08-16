const { ApolloServer, PubSub } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
//const { MONGODB } = require('./config.js');

const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub })
});

server.applyMiddleware({ app, path: '/graphql' });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (req, res) => {
  let urlen = res.sendFile(
    path.resolve(__dirname, 'client', 'build', 'index.html')
  );
  console.log(MONGODB);
});
console.log('Hello');

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI || MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    console.log({ port });
    return app.listen({ port });
  })
  .then(res => {
    console.log(`Server running at port ${port}`);
  });
