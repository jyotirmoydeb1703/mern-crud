const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.MONGO_URL;

mongoose.connect(dbUrl)
.then(()=>{
  console.log("DB Connected successfully");
})
.catch((error)=>{
    console.log(error);
    process.exit(1);
})


let empSchema = mongoose.Schema({
  empName:{
    type:String,
    required: true
  },

  empSalary: {
    type:String,
    required:true
  }
})

module.exports = mongoose.model('empData', empSchema);