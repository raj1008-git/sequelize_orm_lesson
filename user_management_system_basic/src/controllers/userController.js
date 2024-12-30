const User=require('../models/User');

const createUser=async(req,res)=>{
    try{
        const {firstName, lastName, email}=req.body;
        const user=await User.create({firstName,lastName,email});
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

const getUsers=async (req,res)=>{
    try{
        const users=await User.findAll();
        res.status(200).json(users);
    } catch(error){
        res.status(500).json({error:error.message});
    }
};

const updateUser=async(req,res)=>{
try {
    const {id}=req.params;
    const {firstName,lastName,email}=req.body;
    const user=await User.update({firstName,lastName,email}, {where: {id}});
    res.status(200).json(user);
} catch (error) {
    res.status(500).json({error:error.message});
}
};

const deleteUser=async (req,res)=>{
    try {
        const {id} =req.params;
        await User.destroy({where: {id}});
        res.status(200).json({message: 'User Deleted Successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports={createUser,getUsers,updateUser,deleteUser};