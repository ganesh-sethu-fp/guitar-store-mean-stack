const guitar= require('../models/guitars');
const express= require('express');
const Guitar = require('../models/guitars');
const router=express.Router();

router.post("/",(req, res) =>{
    // Create a guitar
  const guitar = {
    name: req.body.name,
    description: req.body.description,
    revisiedDate:req.body.revisiedDate,
    longDescription: req.body.longDescription,
    price: req.body.price,
    image:req.body.image
  };

  // Save Guitar in the database
  Guitar.create(guitar)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Guitar."
      });
    });
})

//all products
router.get("/",(req, res) => {
     
    Guitar.findAll()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving guitars."
        });
      });
  }
)

//a particular product
router.get("/product-detail/:id",(req, res) => {
    const id = req.params.id;
  
    Guitar.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Guitar with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Guitar with id=" + id
        });
      });
  }

)


router.put("/product-detail/:id",(req, res) => {
    const id = req.params.id;
  
    Guitar.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Guitar was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Guitar with id=${id}. Maybe Guitar was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Guitar with id=" + id
        });
      });
  }
)



module.exports=router;