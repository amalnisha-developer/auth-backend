const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();
app.use(cors({
    origin: ['http://localhost:5173'], // Vite default port
    credentials: true
  }));
  
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('sucessful')
})
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
