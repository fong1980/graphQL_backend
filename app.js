const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

//allow cross-origin requests
app.use(cors());
// make sure to replace my db string in process.env.DB_HOST

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('------connected to database succeed-------')
})

// console.log('________',process.env.DBNAME_PASSWORD)

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000 , () => {
    console.log('--server is running, now listening for requests on port 4001')
})