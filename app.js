const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

const port = 4567;
const host = 'localhost';

const routers = require('./Router/index');

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use((cors));
app.use('/', routers);
app.use(express.json());

const serverDB = 'mongodb+srv://New:pIqsq1NAnYt8DjLr@cluster0.z8vzk.mongodb.net/Zomato?retryWrites=true&w=majority';

app.listen(port, host, () => {
    console.log(`Server Is Running At ${host}:${port}`);
})

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(app.listen(port, () => {
        console.log(`Database Is Connected With ${host}:${port}`)
    }))
    .catch((error) => console.log(`${error} Did Not Connect`));
