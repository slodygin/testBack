const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res
        .status(200)
        .send(process.env.MESSAGE || `I'm backend 1`)
        .end();
});

const PORT = process.env.PORT || 80;
// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});