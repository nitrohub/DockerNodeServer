"use strict"

const express = require('express')
const app = express()
const port = 8080

app.get('/hello', (request, response) => {
    let result = 'Hello '+ ( request.query.user || 'stranger'); 
    response.send(result) 
});

app.listen(port, () => console.log(`Example app listening on port ${port}! 
\n 
press Ctrl+c to stop.`))