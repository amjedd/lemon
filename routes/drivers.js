const router = require('express').Router();

const Driver = require('../models/Driver');

module.exports = router;
 
// GET all driver

    router.get('/', (req, res ) => {
        Driver.findAll()
        .then(driver => {
            res.json(driver);
          });
        });

// GET one driver by id
    router.get('/:id', (req, res) => {
      const id = req.params.id;
      Driver.find({
        where: { id: id }
      })
        .then(driver => {
          res.json(driver);
        });
    });
  
// POST single driver

    router.post('/', (req, res) => {
      const name = req.body.name;
      const nationalId = req.body.nationalId;
      const driverLicenseId = req.body.driverLicenseId;
      const plateNo = req.body.plateNo;

      
      Driver.create({
        name: name,
        nationalId: nationalId,
        driverLicenseId:driverLicenseId,
        plateNo:plateNo
      })
        .then(newDriver => {
          res.json(newDriver);
        })
    });
  
// PATCH single driver
    router.patch('/:id', (req, res) => {
      const id = req.params.id;
      const updates = req.body.updates;
      Driver.find({
        where: { id: id }
      })
        .then(driver => {
          return driver.updateAttributes(updates)
        })
        .then(updatedDriver => {
          res.json(updatedDriver);
        });
    });
  
// DELETE single driver
    router.delete('/:id', (req, res) => {
      const id = req.params.id;
      Driver.destroy({
        where: { id: id }
      })
        .then(deletedDriver => {
          res.json(deletedDriver);
        });
    });   
 