const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Test {
    _id: ID
    name: String!
  }

  type Query {
    tests: [Test]!
  }
`;

module.exports = typeDefs;