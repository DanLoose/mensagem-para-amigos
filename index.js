const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Dri vc é incrivel <3 <3')
})

app.listen(3000)