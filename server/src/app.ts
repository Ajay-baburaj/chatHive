import http from 'http'
import express,{Application,NextFunction} from 'express'
import expressConfig from './framework/webserver/express'
import graphqlConfig from './framework/webserver/graphql';
import serverConfig from './framework/webserver/server';

const app:Application = express()

expressConfig(app)
graphqlConfig(app)
const server = http.createServer(app)
  

serverConfig(server).startServer()