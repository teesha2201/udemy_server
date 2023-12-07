const express = require("express")
const app = express();
const port = 4005;
const cors = require("cors");
const Route = require("./route/home_route")
const connection = require("./config/db")
// payment integration
const stripe = require("stripe")("sk_test_51OFcxhSJ9imTpFOMJ7Y2XoFDVrae406lVur8bTpfdVdENWl4yfxYwGXHw2TAJejZCHbZhQJYudMO7wHXWuNm6iKM00csJVqTLm") 

app.use(express.json());
 // giving syntaxError:Unexpected end of JSON input

app.use(cors({
    origin:"*"
}))
app.use(express.urlencoded({extended:true
}))

app.use("/udemy",Route)

app.get('/',(req,res)=>{
    res.send(`Server is running on port no. ${port}`)
})

//checkout api 
app.post("/udemy/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
    console.log(products);
    const lineItems =products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                
                name:product.heading,
            },
            unit_amount:product.price * 100
        },
        quantity:product.quantity || 1
    }))
    const session =await stripe.checkout.sessions.create({
        payment_method_types:["card"],
         line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/",
        cancel_url:"http://localhost:3000/",
    })
    res.json({id:session.id})
})




app.listen(port, async()=>{
    try{
         await connection()
        
        console.log(`Server started after connection on port no.  ${port}`)
    }
    catch(err){
        console.log(`Error:${err}`)
    }
    console.log(`Server is running on http://localhost:${port}`);
})
