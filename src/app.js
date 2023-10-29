const express = require("express");
const router = require("./router")
const cors = require('cors');
const app = express();

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS || '*';

const corsOptions = {
  origin: allowedOrigins, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, 
  optionsSuccessStatus: 204, 
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(router);

module.exports = app;