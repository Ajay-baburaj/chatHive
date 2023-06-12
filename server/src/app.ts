import http from 'http'
import express,{Application,NextFunction} from 'express'
import expressConfig from './framework/webserver/express'

const app:Application = express()
expressConfig(app)
const server = http.createServer(app)

server.listen(3000, () => {
    console.log('Port is running');
  });