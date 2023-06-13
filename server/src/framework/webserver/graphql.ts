import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
    hello: () => 'Hello, GraphQL!'
  };

const graphqlConfig = (app:Application)=>{
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true 
      }));
}

export default graphqlConfig










