const express=require('express');
const app = express();
const sequelize = require('./utils/database');     
// Import the guitar model we have defined 
const Guitar = require('./models/guitars');
const Review = require('./models/reviews');
const productRoute = require("./routes/productRoutes");

const cors=require('cors');
//enabled cors for all urls
app.use(cors());

//parse json request in body (i.e) application/json
app.use(express.json())
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use("/",productRoute);

app.get("/welcome",(req, res) => {
    res.send("welcome to the backend of the web app.");
})


const PORT=process.env.PORT || 8080;
sequelize.sync().then(()=>{
    console.log("connected to db...");
    app.listen(PORT,()=>{
        console.log(`app running on http://localhost:${PORT}`);
    });
});


// app.listen(PORT,()=>{
//     console.log(`app listening on port ${PORT}`);
// })
    
// // Create all the table defined using  
// // sequelize in Database 
    
// // Sync all models that are not 
// // already in the database 
// sequelize.sync();