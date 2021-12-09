const express = require('express');
const app = express();
const PORT = 6969;
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'store',
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, err => err ? console.log(err) : console.log('Connected to database'));


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(PORT,()=>{console.log(`Server Started at ${PORT}`)})