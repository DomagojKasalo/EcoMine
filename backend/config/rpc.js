require('dotenv').config();

const RPC_URL = process.env.RPC_URL;
const RPC_USER = process.env.RPC_USER;
const RPC_PASSWORD = process.env.RPC_PASSWORD;

const rpcConfig = {
  url: RPC_URL,
  auth: {
    username: RPC_USER,
    password: RPC_PASSWORD,
  },
};

module.exports = rpcConfig;
