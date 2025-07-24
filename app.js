import express from "express";
import { NODE_ENV, PORT } from "./config/env.js";
import authRouter from "./ROUTES/auth.route.js";
import userRouter from "./ROUTES/user.route.js";
import subscriptionRouter from "./ROUTES/subscrition.route.js";
import  DB_connection from "./database/mongo_db.js";

const app = express();
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.get('/', (req,res)=>{
    res.send("welcome to subscription Tracker API");
})

app.listen(PORT,async()=>{
    console.log(`subs api is running on http://localhost:${PORT}`)
    console.log(`nodewnv ${NODE_ENV}`)
    await DB_connection();
})  



export default app;