const express = require('express');
const app = express();
const empRoutes = require('./routes/empRoutes')
const PORT = process.env.PORT || 5001;
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/', require('./routes/empRoutes'))

app.listen(PORT, (err)=>{
  if(err){
    console.log(`Server facing some issue running on PORT :  ${PORT}`);
  }
  else{
    console.log(`Server Running on PORT : ${PORT}`);
  }
})