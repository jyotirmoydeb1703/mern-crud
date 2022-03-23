const express = require('express');
const router = express.Router();
const empSchema = require('../model/empModel');

router.post('/api/v1/employee/create', (req, res, next) => {
  empSchema.create({
    empName: req.body.empName,
    empSalary: req.body.empSalary
  })
    .then((data) => {
      res.json({
        message: 'Record created successfully',
        record: data,
      }).status(200)
    })
})

router.get('/api/v1/employees', (req, res, next) => {
  empSchema.find({}, (err, data) => {
    if (err) {
      console.log("Not able to access");
    }
    else {
      res.send(data)
    }
  })
})


router.get('/api/v1/employee/:id', (req, res, next) => {
  empSchema.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(object);
    }
    else {
      res.send(data)
    }
  })
})

router.delete('/api/v1/delete/:id', (req, res, next) => {
  empSchema.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      console.log(`Problem Deleting Data : ${err}`);
    }
    else {
      res.send(`${data} Deleted Successfully `)
    }
  })
})

router.post('/api/v1/update/:id', (req, res, next) => {
  const emp = {
    empName: req.body.empName,
    empSalary: req.body.empSalary
  }
  empSchema.findByIdAndUpdate(req.params.id, { $set: emp }, (err, data) => {
    if (err) {
      console.log(`Problem Updating :  ${err}`);
    }
    else {
      res.json({
        message: 'Record Updated successfully',
        UpdatedRecord: emp
      });
    }
  })
})



module.exports = router;
