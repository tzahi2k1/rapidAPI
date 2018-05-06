const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/users/auth', (req, res) => {
    const {username,password} = req.body;
    if(username.toLowerCase() === 'rapidapi' &&
        password === 'rapidAPI'){
        let responseJson = {
            id: 1234,
            token: 'just-a-token',
            message: 'Successful login'
        };
        return res.send(responseJson);
    }
    res.status(401).send({message: "Unauthorized, please try again"})
});

app.listen(port, () => console.log(`Listening on port ${port}`));