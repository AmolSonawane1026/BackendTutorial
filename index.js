const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello This is from the backend tutorial</h1>')
})

app.get('/Test',(req,res)=>{
    res.send('<h1>Hello this is the test page<h1/>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})