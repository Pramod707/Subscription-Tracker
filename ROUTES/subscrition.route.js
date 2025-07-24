import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{res.send({title : "get all subscriptions"})});

subscriptionRouter.get('/id',(req,res)=>{res.send({title : "get subscriptions details"})});

subscriptionRouter.post('/',(req,res)=>{res.send({title : "Create subscriptions"})});

subscriptionRouter.put('/id',(req,res)=>{res.send({title : "Update new subscriptions"})});

subscriptionRouter.delete('/id',(req,res)=>{res.send({title : "delete all subscriptions"})});

subscriptionRouter.get('/user/id',(req,res)=>{res.send({title : "get all users subscriptions"})});

subscriptionRouter.put('/id/cancel',(req,res)=>{res.send({title : "cancel subscriptions"})});

subscriptionRouter.get('/upcomming renewals',(req,res)=>{res.send({title : "get all upcoming renewals"})});


export default subscriptionRouter;