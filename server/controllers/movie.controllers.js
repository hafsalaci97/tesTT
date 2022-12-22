const Movie = require('../models/movie.model')

module.exports.getAllMovies=(req,res)=>{
    Movie.find()
        .then(allMovies => res.json({results: allMovies}))
        .catch(err=>res.json({message: "Couldn't get all movies", err}))
}

module.exports.createMovie = (req,res)=>{
    Movie.create(req.body)
        .then(newMovie=>res.json({results:newMovie}))
        .catch(err=>res.status(400).json({message: "Couldn't create the movie", err}))
}

module.exports.getOneMovie=(req,res)=>{
    Movie.findOne({_id: req.params.id})
        .then(oneMovie=>res.json(oneMovie))
        .catch(err=>res.json({message:"Couldn't get the movie"},err))
}

module.exports.editOneMovie=(req,res)=>{
    Movie.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedMovie=>res.json(updatedMovie))
        .catch(err=>res.json(err))
}

module.exports.deleteOne = (req,res)=>{
    Movie.deleteOne({_id: req.params.id})
    .then(deletedProduct => res.json(deletedProduct))
    .catch(err=> res.json(err));
}