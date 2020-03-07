const { ApolloServer } = require("apollo-server-lambda");
const { buildFederatedSchema } = require("@apollo/federation");
const { typeDefs } = require('./schemas/index');
const { resolvers } = require('./resolvers/index');


const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

// server.listen({ port: 4001 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

exports.auth = server.createHandler();

const users = [
  {
    id: "1",
    name: "Alan Turing",
    birthDate: "1912-06-23",
    username: "@complete"
  },
  {
    id: "1",
    name: "Ada Lovelace",
    birthDate: "1815-12-10",
    username: "@ada"
  },
];
