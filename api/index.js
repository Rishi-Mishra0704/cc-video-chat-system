require("dotenv").config();

const { ExpressPeerServer } = require("peer");
const express = require("express");
const cors = require("cors");

const http = require("http");

const app = express();
app.use(cors())
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
});

server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});
