// -> packgages
const express = require('express');
const cors = require('cors');
const connectToDb = require('./Models/dbConnection.js');



// -> init
const app = express();
connectToDb();
app.use(express.json());
app.use(cors());



// -> Middlewares
app.get('/', (req, res) => res.send('Homepage of the application'));
app.use('/api/products', require('./Routes/products.js'));



// -> listening for requests
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));