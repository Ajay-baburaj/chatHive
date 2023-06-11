import http from 'http'
import express,{Application,NextFunction} from 'express'
import expressConfig from './framework/webserver/express'
import config  from 'config'

const app:Application = express()
expressConfig(app)
const server = http.createServer(app)

const port = config.get<number>('port')
const host = config.get<string>('host')



server.listen(port,host,()=>{
    console.log('server is running')
})