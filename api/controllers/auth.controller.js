import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs' //hashing

export const signup =async (req,res)=>{
    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //salting num-no. of rounds
    const newUser = new User({username, email ,password : hashedPassword});
    try{
        await newUser.save();
        res.status(201).json('user created');
    }
    catch(error){
        res.status(500).json(error.errmsg);
    }
   
 }