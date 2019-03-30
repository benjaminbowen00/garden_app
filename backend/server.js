const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const plantRoutes = express.Router();
const PORT = 4000;


let Plant = require("./plant.model");


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/plants', {useNewUrlParser: true});
const connection = mongoose.connection;



connection.once('open', function(){
  console.log("MongoDB database connection established successfully")
});

plantRoutes.route('/').get(function(req, res){
  Plant.find(function(err, plants){
    if(err){
      console.log(err);
    }
    else{
      res.json(plants)
    }
  });
});

plantRoutes.route('/:id').get(function(req, res){
  let id = req.params.id;
  Plant.findById(id,function(err, plants){
    if(err){
      console.log(err);
    }
    else{
      res.json(plants)
    }
  });
});

plantRoutes.route('/square/:id').get(function(req, res){
  let id = req.params.id;


  Plant.find({square: id},function(err, plants){
    if(err){
      console.log(err);
    }
    else{
      res.json(plants)
    }
  });
});

plantRoutes.route('/square/:id/create').post(function(req, res){
  let id = req.params.id;
  let plant = new Plant(req.body);
  plant.save()
        .then(plant=>{
          res.status(200).json({'plant':'plant added successfully'})
          .catch(err=>{
            res.status(400).send('creating plant failed');
          });
        });
});

plantRoutes.route('/update/:id').post(function(req, res){
  Plant.findById(req.params.id, function(err, plant){
    if(!plant){
      res.status(404).send('data is not found');
    }
    else{
      plant.square = req.body.square;
      plant.plant_name = req.body.plant_name;
      plant.plant_number = req.body.plant_number;
      plant.plant_planting_date = req.body.plant_planting_date;
      plant.plant_flowering_date = req.body.plant_flowering_date;
      plant.plant_description = req.body.plant_description;

      plant.save().then(plant => {
        res.json('Plant updated');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
    }
  });
});

app.use('/plants', plantRoutes);

app.listen(PORT, function(){
  console.log("Server is running on PORT: "+PORT);
});
