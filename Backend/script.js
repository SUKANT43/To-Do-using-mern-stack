const PORT=3003
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const { describe } = require('node:test')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/todo')

const dataSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const db=mongoose.model('todo',dataSchema)

app.post('/data',async  (req,res) =>{
    try{
        const{description,message}=req.body
        const add=new db({description,message})
       await add.save()
       res.json(add)
    }
    catch(e){
        res.status(500).json(e)
    }
    
})
app.get('/data',async (req,res)=>{
        try{
            const give=await db.find();
            res.json(give)
        }
        catch(e){
            res.status(500).json(e)
        }
})
app.put('/data/:id', async (req, res) => {
    try {
        const { description, message } = req.body; 
        const id = req.params.id; 
        const updated = await db.findByIdAndUpdate(
            id,
            { description, message },  
            { new: true }  
        );
        if (!updated) {
            return res.status(404).json({ error: 'Data not found' });
        }        res.json(updated);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.delete('/data/:id',async (req,res)=>{
    try{
        const id=req.params.id
        await db.findByIdAndDelete(id)
        res.message("data is deleted")
    }
    catch(e){
        res.status(500).send(e)
    }
})
app.listen(3003,()=>{console.log("server connected to"+PORT)})
