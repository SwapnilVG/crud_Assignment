exports.registerDataValidate = (req,res,next) =>{
    const {name,email,password} = req.body;
    if(req.body && name &&  email && password){
        next()
    }else{
        res.status(400).json({message:"all input fields are required"})
    }
}