   /*
   Index: Listagem de sessoes
   store: criar um sessao
   Show: Listar uma unca sessao
   Update: alterar uma sessao
   Destroy: deletar uma sessao
   */
     

import User from "../models/User";

class  SessionControler{
    async store(req,res){
         const {email} = req.body;

         let user = await User.findOne({email});
         if(!user){
            user = await User.create({email})
         }

        return res.json(user)
    }
}

export default new SessionControler();
