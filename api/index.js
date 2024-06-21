require('dotenv').config();

const { ExpressPeerServer } = require('peer');
const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());

// Create an HTTP server
const server = http.createServer(app);

// Set up the PeerJS server
const peerServer = ExpressPeerServer(server, {
  debug: true,
  allow_discovery: true,
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use the PeerJS server with a specific route
app.use('/myapp', peerServer);

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`PeerJS server running on http://localhost:${PORT}/myapp`);
});
