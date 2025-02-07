const axios = require('axios');
const rpcConfig = require('../config/rpc');

const sendRpcRequest = async (method, params = []) => {
  try {
    const response = await axios.post(
      rpcConfig.url, 
      {
        jsonrpc: "2.0", 
        id: 1, 
        method: method, 
        params: params, 
      },
      {
        auth: rpcConfig.auth, 
      }
    );
    return response.data.result; 
  } catch (error) {
    console.error(
      `Greška pri RPC zahtjevu (${method}):`,
      error.response?.data?.error || error.message
    );
    throw new Error(
      error.response?.data?.error?.message || "Nije moguće izvršiti RPC zahtjev."
    );
  }
};

module.exports = sendRpcRequest;
