const user= require('../model/userModel.js')

exports.registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body
        await user.create({
            name,
            email,
            password
        })
        res.status(200).send({msg:"User Registered Successfully"})
        
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}

exports.loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const  userData = await user.findOne({email});
        if(userData){
            if(userData.password == password){
                res.status(200).send({msg:"User login Successfully"})
            }else{
                res.status(404).send({msg:"You have Entered Wrong Password"})
            }
        }else{
            res.status(404).send({msg:"No Account Find associated to this email"})
        }
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
}


exports.getusers = async (req,res) =>{
    try {
        const users = await user.find({})
        res.status(200).json({
            msg:"Sucessfully Fetch Users",
            users 
        })
    }catch (error) {
        res.status(200).send({msg:"Fail To Fetch Users"})
        console.log(error.message)
    }
}


