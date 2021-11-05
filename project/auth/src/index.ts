import express from 'express';
import {json} from 'body-parser';
import chalk from 'chalk';

const magenta = chalk.magenta.inverse.bold

const app = express();
app.use(json());


app.listen(3000, () => {
    console.log(magenta(' Server is listening on port 3000 '));
});