const express= require('express')
const cors= require("cors")
const morgan= require("morgan")
const colors= require("colors")
const dotenv= require("dotenv")
const connectDB= require("./config/db")

// env configure.
dotenv.config({path: "./config/.env"});

// mongoDB connection.
connectDB();

//routers
const userRoutes= require('./routers/userRoutes');

// rest object 
const app= express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user', userRoutes);

//PORT
const PORT= process.env.PORT;
const DEV= process.env.DEV_MODE;


// listen
app.listen(PORT, ()=>{
    console.log(`Server running on ${DEV} mode port no. ${PORT}`.bgCyan.white);
})