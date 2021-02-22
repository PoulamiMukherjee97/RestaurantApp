
const exp=require('express');
const app=exp();
app.use(exp.json())
const restaurants=require('./Restaurants.json');
let restaurant=[];
let appetizer=[];
let maincourse=[];
let dessert=[];
let cart=[];

app.get("/restaurants",(req,res)=>{
    res.json(restaurants)
}
)
app.post("/restaurant",(req,res)=>{
    restaurant=req.body;
    res.send(restaurant);
})

app.get("/restaurant",(req,res)=>
    res.send(restaurant)
)
app.post("/appetizer",(req,res)=>{
    appetizer=req.body;
    res.send("Appetizer Posted");
})
app.post("/maincourse",(req,res)=>{
    maincourse=req.body;
    res.send("Maincourse Posted");
})
app.post("/dessert",(req,res)=>{
    dessert=req.body;
    res.send("Dessert Posted");
})
app.get("/cartData",(req,res)=>{
    cart=[]
    cart.splice(0,0,appetizer,maincourse,dessert);
    res.send(cart);
}
)



app.listen(2000,()=>console.log("Listening to port 2000"));