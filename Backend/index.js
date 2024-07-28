const express = require('express');
const bodyParser = require('body-parser');
const ConnectMongoDB = require('./mongoose');
const userRoutes = require('./Router/user');
const blogRoutes = require('./Router/blog');
const PORT = 8000;

const app = express();


ConnectMongoDB()
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("MongoDB not connected", err);
    });
app.use(bodyParser.json()); 
app.use('/user', userRoutes);
app.use('/blog', blogRoutes);

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
