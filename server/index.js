const express = require('express');
const db = require('./config/db');
const env1=require("dotenv")
const cors=require("cors")
const bodyParser=require("body-parser")
env1.config()
const router=require("./routes/route")
// const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;
console.log("the env var PORT is:",PORT)


const corsOptions={
  origin:"http://localhost:3000",
  methods:["PUT","POST","DELETE","GET"],
  allowedHeaders:["Content-type","Authorization"],
  Credentials:true

}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(router)
// Connect to MongoDB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Middleware
app.use(express.json());

// Routes
// app.use('/users', userRoutes);
// Add more routes as needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
