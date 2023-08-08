const express = require('express');
const connectToMongo = require('./db');
const app = express()
const port = 5000
var cors = require('cors');

connectToMongo();
app.use(cors())
app.use(express.json())

// app.use('/api/', require('./routes/store'))
app.use('/api/fetch', require('./routes/fetch'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})