require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-gas-reporter");





SEPHOLIA_URL = process.env.SEPHOLIA_URL;
SEPHOLIA_PRIVATE_KEY = process.env.SEPHOLIA_PRIVATE_KEY;
LOCALHOST_URL = process.env.LOCALHOST_URL;
COINMARKETCAP_APY = process.env.COINMARKETCAP_APY;

module.exports = {
  solidity: "0.8.8",

gasReporter:{
noColor: true,
enable: true,
outputFile : "gas-reporter.txt",
currency: "USD",
coinmarketcap: COINMARKETCAP_APY,

},

networks:{
  sepholia:{
    url: SEPHOLIA_URL,
    accounts:[SEPHOLIA_PRIVATE_KEY],
    chainId : 11155111,
  },
  localhost:{
    chainId : 31337,
    url : LOCALHOST_URL,
    },
  
},



  


};
