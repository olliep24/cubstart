const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
    }
    console.log(response)
    res.send(response)
})

app.listen(8080, () => {
    console.log('Demo listening on 8080.')
})