const axios = require("axios");

const API_URL = "http://blockchain.oss.unist.hr:50004";
const USERNAME = "student";
const PASSWORD = "n24PaIR7EwPyeMi1GB6cx4bVt1R24fZ8xl2jd8kr2REi2i8Tn";

async function sendRpcRequest(method, params = []) {
  try {
    const response = await axios.post(
      API_URL,
      {
        jsonrpc: "2.0",
        id: 1,
        method: method,
        params: params,
      },
      {
        auth: {
          username: USERNAME,
          password: PASSWORD,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error("Greška:", error.response?.data?.error || error.message);
  }
}

(async () => {
    const blockCount = await sendRpcRequest("getmempoolinfo");
    console.log("Mempool info:", blockCount);
})();
