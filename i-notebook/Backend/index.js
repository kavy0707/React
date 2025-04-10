const connecttomongo = require('./db')
const cors = require('cors');

connecttomongo();

const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'))

app.get('/hello', (req, res) => {
  res.send("hello kavy")
})


app.listen(port, () => {
  console.log(`i-notebook app listening on port ${port}`)
})