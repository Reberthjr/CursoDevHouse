import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';
import Path from 'path';
import exp from 'constants';
import path from 'path';
class app{

constructor(){
    this.server = express();
    
    mongoose.connect('mongodb+srv://devjr:j12345678@projetos.qfn6nbg.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      


    this.middlewares();
    this.routes();

}

middlewares(){
    this.server.use(cors());

    this.server.use(
        '/files',
        express.static(path.resolve(__dirname, `..`,`uploads`))
    );
    this.server.use(express.json());

}

routes(){
    this.server.use(routes);
}

}

export default new app().server;
