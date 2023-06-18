const {ethers} = require("hardhat");
const { Contract } = require("hardhat/internal/hardhat-network/stack-traces/model");


async function deployContract(){
const fundMeFactory = await ethers.getContractFactory("FundMe");
console.log("Wait, contract is deplopying...");

const fundMe  = await fundMeFactory.deploy();
await fundMe.deployed();
console.log("The contract address is : " + fundMe.address);


const currentBalanceOfContract = await fundMe.provider.getBalance(fundMe.address);
console.log("The current and initial balance of the contract is " + currentBalanceOfContract.toString());
const sendValue = ethers.utils.parseEther("0.03");
 const fund = await fundMe.fund({value: sendValue});
 await fund.wait(1);
console.log("The funds are been corrently sent");
await fundMe.withdraw();
console.log("The funds are been corrently withdrawed ");


}

deployContract()
.then(() => process.exit(0))
.catch((error)=>{
  console.log(error)
  process.exit(1);
})
