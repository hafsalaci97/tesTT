const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/filmaDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Connected to DB!'))
.catch((err)=>console.log(err))