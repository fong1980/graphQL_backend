const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to mlab database
// make sure to replace my db string & creds with your own

mongoose.connect('mongodb://fong1980:dejavu1@ds229909.mlab.com:29909/gql-ninja')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

console.log('________',process.env.DBNAME_PASSWORD)

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})