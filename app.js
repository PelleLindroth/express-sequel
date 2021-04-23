const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Setup complete')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})