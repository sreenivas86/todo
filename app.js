
const express =require('express')
const bodyparser=require('body-parser')

const app= express()
app.listen("8000",()=>{console.log("http://localhost:8000/")})

app.set("view engine","ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'));
var items=[];


app.get('/',(req,res)=>{
    res.render('list',{ejes:items})
})
app.post('/',(req,res)=>{
    const item=req.body.ele1;
    items.push(item)
    res.redirect('/')
    
})






