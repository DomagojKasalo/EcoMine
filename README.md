# EcoMine Block Explorer  

## 📌 Project Overview  

EcoMine is a Bitcoin block explorer that provides analysis of Bitcoin blocks. Users can retrieve block details using a **block hash** or **height**, compare two blocks, and analyze mining efficiency based on historical data. The application calculates **energy consumption, CO2 emissions, electricity cost**, and retrieves the **historical price of Bitcoin** to provide insights into mining profitability.  

## 🛠️ Technologies Used  

### **Backend**  
- **Node.js & Express.js** – Server-side framework for handling API requests.   
- **Bitcoin Core RPC API** – Retrieves real-time Bitcoin block data.  
- **CryptoCompare API** – Fetches historical Bitcoin price data.  

### **Frontend**  
- **React.js** – UI framework for dynamic user interactions.  
- **Chart.js** – Data visualization for block comparison.  
- **Axios** – Handles API requests between frontend and backend.  

## 🚀 Key Features  

✅ **Retrieve Block Data** – Fetch block details using **block hash** or **height**.  
✅ **Energy & CO2 Analysis** – Calculate estimated mining energy consumption and environmental impact.  
✅ **Historical Bitcoin Price** – Fetch Bitcoin's price at the block’s mining date.  
✅ **Block Comparison** – Visually compare two blocks using a **bar chart**.  

## 📌 How It Works  

1️⃣ The user inputs a block **hash** or **height**.  
2️⃣ The backend fetches the block details via **Bitcoin Core RPC API**.  
3️⃣ The **historical Bitcoin price** is retrieved using the **CryptoCompare API**.  
4️⃣ **Energy, CO2 emissions, and mining cost** are calculated using mining efficiency data.  
5️⃣ The user sees a **detailed block report** or a **visual comparison of two blocks**.  
