import { ServerMonitoringMode } from "mongodb";
import mongoose from "mongoose";
import subscriptionRouter from "../ROUTES/subscrition.route";

const SubscritionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "price is required"],
    trim: true,
  },

  currency: {
    type: String,
    enum: ["INR", "USD"],
    required: [true, "currency is required"],
    default: "INR",
  },

  frequency: {
    type: String,
    enum: ["daily", "weekly", "monthly", "yearly"],
    required: [true, "frequency is required"],
  },

  category: {
    type: String,
    enum: [
      "sports",
      "entertainment",
      "news",
      "health",
      "music",
      "lifestyle",
      "other",
    ],
    required: [true, "category is required"],
  },

  payment: {
    type: String,
    required: [true, "payment is required"],
    trim: true,
  },

  status: {
    type: String,
    enum: ["active", "inactive", "cancelled"],
    required: [true, "status is required"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: [true, "startDate is required"],
    trim: true,
    validate: {
      validator: (value) => value <= new Date(),
      message: "renewalDate should be past date",
    },
  },

  renewalDate: {
    type: Date,
    required: [true, "renewalDate is required"],
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: "renewalDate should be after the start date",
    },

    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
      index: true,
    },
  },
});         

//auto calculating the renewalDate

SubscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly : 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewalDate = new Date(this.startDate)
      this.renewalDate.setDate(this.startDate.getDate() + renewalPeriods[this.frequency]); 
  }
  //auto update the status
  if(this.renewalDate < new Date()){
    this.status = "expired";
  }
   
  next();
});

const Subscription = mongoose.model("Subscription", SubscritionSchema);
export default Subscription;