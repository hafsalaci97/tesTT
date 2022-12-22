const MovieController = require('../controllers/movie.controllers')

module.exports=(app)=>{
    app.get('/api/getAllMovies',MovieController.getAllMovies)
    app.post('/api/createMovie',MovieController.createMovie)
    app.get('/api/oneMovie/:id', MovieController.getOneMovie)
    app.put('/api/editMovie/:id',MovieController.editOneMovie)
    app.delete('/api/deleteMovie/:id',MovieController.deleteOne)
}