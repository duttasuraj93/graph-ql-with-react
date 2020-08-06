const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/Schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://suraj:1hellothere@cluster0.y2qbg.mongodb.net/Cluster0?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log("connected mongodb");
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4000, () => {
    console.log("4000 working");
})