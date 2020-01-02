const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router");
const server = express();

server.use(cors());
server.use(express.json());
server.use(helmet());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

module.exports = server;
