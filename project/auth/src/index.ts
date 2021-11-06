import express from 'express';
import {json} from 'body-parser';
import chalk from 'chalk';

const PORT = 3000;

const magenta = chalk.magenta.inverse.bold

const app = express();
app.use(json());

//? Add a get current user request

app.get('/api/v1/users/currentuser', (req, res) => {    
    res.send(`${magenta('Current User')}`);
});


app.listen(PORT, () => {
    console.log(magenta(`Listening on port: ${PORT}!!!!!!!!!!!!`));
});