const express = require('express')
const app = express()
const { version } = require('./package.json')

app.get('/version', (_req, res) => {
  res.json({ version })
})

app.listen(process.env.NODE_PORT || 3000)
