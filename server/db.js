const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://khan:SAHILKHAN@cluster-khan.yr8cojh.mongodb.net/employees_db?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}