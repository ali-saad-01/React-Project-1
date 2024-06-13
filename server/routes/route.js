const express=require("express")

const {createUser, getAllUsers, forgetPass}=require("../controller/usercontroller")

const router=express.Router()

router.get('/getuser',getAllUsers)
router.post("/createuser",createUser)
router.put('/forgetpassword', forgetPass)


module.exports=router;