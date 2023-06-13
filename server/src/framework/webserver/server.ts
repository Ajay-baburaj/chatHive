import { Server } from 'http'
import dotenv from 'dotenv'
dotenv.config();


const serverConfig=(server:Server)=>{
    const startServer = ()=>{
        server.listen(process.env.PORT,()=>{
            console.log(`Port is running at ${process.env.PORT}`)
        })
    }
    return{
        startServer 
    } 
}

export default serverConfig