const express = require("express")
const app = express();
const port = 4005;
const cors = require("cors");
const Route = require("./route/home_route")
const connection = require("./config/db")


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
