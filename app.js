const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;

app.get('/', (req, res) => {
    res.json({
        msg: 'oi',
    })
})

app.listen(PORT, () => [
    console.log('Escutando na porta: ' + PORT)
])