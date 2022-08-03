import express from 'express';
import { serviceController } from './serviceController';

const app = express()

app.get('/', function (req, res) {
	const result = await serviceController();
	res.send('Hello World')
})

app.listen(3000)