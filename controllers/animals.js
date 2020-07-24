const express = require('express');
const router = express.Router();
const Animals = require('../models/animals.js')

//create create route 
router.post('/', (req, res) => {
    Animals.create(req.body, (err, createdAnimal) => {
        res.json(createdAnimal); //.json() will send proper headers in response so client knows it's json coming back 
    });
});

//create Index route 
router.get('/', (req, res) => {
    Animals.find({}, (err, foundAnimals) => {
        res.json(foundAnimals);
    });
});

//create Delete route 
router.delete('/:id', (req, res) => {
    Animals.findByIdAndRemove(req.params.id, (err, deletedAnimal) => {
        res.json(deletedAnimal);
    });
});

//create Update route
router.put('/:id', (req, res) => {
    Animals.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAnimal) => {
        res.json(updatedAnimal);
    });
});


module.exports = router;


//test: curl http://localhost:3000/animals
// test: curl -X POST -H "Content-Type: application/json" -d '{"name":"Susie","species":"poodle"}' http://localhost:3000/animals
//test: curl http://localhost:3000/animals
// test : curl -X DELETE http://localhost:3000/animals/5f146d4da9778d09da6244c1
//test: curl -X PUT -H "Content-Type: application/json" -d '{"name":"Mary","species":"Chiwawa"}' http://localhost:3000/animals/5f146f7fa9778d09da6244c2