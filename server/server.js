const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const PUBLIC_URL = path.join(__dirname, '..', 'build');

app.use(express.static(PUBLIC_URL));

app.get('*', (req, res) => {
    res.sendFile(path.join(PUBLIC_URL, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on the port: ${port}!`);
});
