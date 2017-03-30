import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import * as indexRoute from '../routes/';
import morgan from 'morgan';

// Require our routes into the application
// This have to come before the app.get

// Set up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use('/api/users', indexRoute.userRouter);
app.use('/api/roles', indexRoute.roleRouter);
app.use('/api/documents', indexRoute.docRouter);
app.use('/api/search', indexRoute.searchRouter);

// Setup a default catch-all route that sends back a
// welcome message in JSON format
app.use(express.static(path.join(__dirname, '../../client/public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});
// app.get('*', (req, res) => res.status(200).send({
//   message: 'Welcome to Document Manager 1.0',
// }));

export default app;
