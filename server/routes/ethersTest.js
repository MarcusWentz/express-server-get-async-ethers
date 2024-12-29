const express = require("express");
const router = express.Router();
const ethers = require("ethers") // npm i ethers@5.7.2 https://github.com/smartcontractkit/full-blockchain-solidity-course-js/discussions/5139#discussioncomment-5444517
 
const rpcURL = process.env.baseSepoliaWSS // Your RPC URL goes here
const provider = new ethers.providers.WebSocketProvider(rpcURL)

const contractAddress = '0xeD62F27e9e886A27510Dc491F5530996719cEd3d'
const contractABI = [{"anonymous":false,"inputs":[],"name":"setEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"storedData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
const contractDeployed = new ethers.Contract(contractAddress, contractABI, provider);

async function getStoredData() {  
  const storedData = await contractDeployed.storedData()
  return storedData
}

// Define API routes
router.get("/storage", async (req, res) => {

  // const messageToReturn = "a" + "b";  
  const messageToReturn = await getStoredData();

  res.status(200).json({
    success: true,
    message: messageToReturn,
  });
});

router.get("/hello", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from the new API! 🚀",
  });
});


module.exports = router;

