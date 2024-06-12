const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {sportmodel} = require("./models/sport")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://jinithajohnson:jingov02@cluster0.wo3ieyl.mongodb.net/sportsDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let stud = new sportmodel(input)
    stud.save()
    console.log(stud)
    res.json({status:"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    sportmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
        ).catch(
            (error)=>{
                res.json(error)
            }
)
})


app.get("/view",(req,res)=>{

    sportmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    sportmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        })
        
    })

app.listen(8081, () => {
    console.log("server started")
})



