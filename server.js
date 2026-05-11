const path = require('path')
const express = require('express')
const next = require('next')

const app = next({
  dev: false,
  dir: __dirname,
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use(
    '/_next',
    express.static(path.join(__dirname, '.next'))
  )

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const port = process.env.PORT || 8080

  server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on ${port}`)
  })
})