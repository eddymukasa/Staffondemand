
//const compression = require('compression')
//const basicAuth = require('express-basic-auth')

const express = require('express')
const app = express()
const port = 3000

/* app.use(
    basicAuth({
        users: { eddy: 'eddy' },
        challenge: true
    })
) */

//app.use(compression())
app.use(express.static('./build'))

app.get('/*', (req, res) => res.sendFile('/app/build/public/index.html'))

app.listen(port,  () => {
    console.log('Listening on http://0.0.0.0:${port}')
})