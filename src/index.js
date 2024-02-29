require('dotenv').config()
const express = require('express')
const { routes } = require('./routes')
const cors = require('cors')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(routes)


app.listen(port)