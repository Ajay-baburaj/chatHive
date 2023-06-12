import http from 'http'
import express,{Application,NextFunction} from 'express'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import expressConfig from './framework/webserver/express'

dotenv.config();
const app:Application = express()
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
    hello: () => 'Hello, GraphQL!'
  };
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true 
  }));
expressConfig(app)
const server = http.createServer(app)
  

server.listen(process.env.PORT, () => {
    console.log(`Port is running at ${process.env.PORT}`);
  });