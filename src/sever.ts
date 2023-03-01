import  Express  from "express";
import dontev  from "dotenv";
import mustacheExpress from "mustache-express";
import path from "path";
import Mainroutes from "./routes/index";

dontev.config()

const sever = Express()


sever.set('view engine' , 'mustacheExpress ')
sever.set('views' , path.join(__dirname, 'views'))
sever.engine('mustache' , mustacheExpress())

sever.use(Express.static(path.join(__dirname, '../public')))

// rotas
sever.use(Mainroutes)
sever.use((req,res)=>{
    res.send('pagina não encontrada!')
})
sever.listen(process.env.PORT)