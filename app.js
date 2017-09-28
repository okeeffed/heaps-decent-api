var fs = require('fs');
var dotenv = require('dotenv');
var envConfig = dotenv.parse(fs.readFileSync('.env'));
for (var k in envConfig) {
	process.env[k] = envConfig[k]
}

// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

// DBs


// Routes Setup
const routes = require('./routes');
const graphql = require('./routes/graphql');



// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// const Bitcoin = require('./controllers/bitcoinMagazine');
// Bitcoin.fetch()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err.message));

const Crypto = require('./controllers/crypto');
Crypto.fetch()
	.then(res => console.log(res))
	.catch(err => console.log(err.message));

// Map routes to URL
routes(app);
graphql(app);

// Server Setup
const port = process.env.NODE_ENV == 'production' ? 80 : 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
