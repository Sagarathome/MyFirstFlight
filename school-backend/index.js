const connectToMongo = require("./db");
const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')


connectToMongo(); // Call the connectToMongo function to establish the database connection

app.get('/', (req, res) => {
    res.send('Hello baby!');
});

app.use(express.json())
app.use(cors())

// Available routes
app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
