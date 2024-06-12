const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "age":{type:String,required:true},
        "game":{type:String,required:true},
        "achievements":{type:String,required:true}
    }
)
let sportmodel=mongoose.model("sports",schema)
module.exports={sportmodel}