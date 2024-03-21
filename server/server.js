import express from 'express'
import Main from '../gsap/src/Main.js'
const app = express()
const port = 3000


app.get('/', (req, res) => {
    
    res.end("<Main/>")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))