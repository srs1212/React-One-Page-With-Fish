var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');

//goes to api/fish because we did an app use api for all fishRoutes in server.js
router.route('/')
	.get(function(req,res){
		Fish.find(function(err, fishes){
			if(err){
			res.status(500).send(err,'Something wrong w/ the GET fishes');
			}else {
			res.json(fishes);
			}
		});
	})

	.post(function(req,res){
		//Create new Fish
		var fish = new Fish({
			name: 			req.body.name,
			color: 			req.body.color,
			people_eater: 	req.body.people_eater,
			length: 		req.body.length,
			img: 			req.body.img,
	})
	//Save fish with node style callback
	fish.save(function(err,fish){
		if(err) {
			res.status(500).send(err,'Something broke in creating a fish');
		} else {
			res.json(fish);
		}
	});
});
//without one_fish, next route would conflict
router.route('/one_fish/:fish_id')
//Get one fish by the mongo id
	.get(function(req,res){
		Fish.findById(req.params.fish_id, function(err, afish){
			if(err){
			res.status(500).send(err,'Something wrong w/ the GET fishes for ID');
			} else {
			res.json(afish);
			}
		})
});

router.route('/man_eater')
//api/sih/man_eater
	.get(function(req,res){
		Fish.find({people_eater: true}, function(err, fish){
			if(err){
			res.status(500).send(err, 'Something awry w/ fish eater GET')
			} else {
			res.json(fish);
			}
		})	
})
	



module.exports = router;