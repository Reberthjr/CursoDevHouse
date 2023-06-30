   /*
   Index: Listagem de sessoes
   store: criar um sessao
   Show: Listar uma unca sessao
   Update: alterar uma sessao
   Destroy: deletar uma sessao
   */
     

import User from "../models/User";
import * as Yup from 'yup';

class  SessionControler{
    async store(req,res){

         const schema = Yup.object().shape({
            email: Yup.string().email().required(),
         })
         const {email} = req.body;

         if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:'Este não é um email válido'})
         }
         
         let user = await User.findOne({email});
         if(!user){
            user = await User.create({email})
         }

        return res.json(user)
    }
}

export default new SessionControler();
