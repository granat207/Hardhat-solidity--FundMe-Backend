const {assert} = require("chai");
const { ethers } = require("hardhat");


describe("FundMe", async function(){
let fundMeFactory;
let fundMe;
beforeEach(async function(){

    fundMeFactory = await ethers.getContractFactory("FundMe");
    fundMe = await fundMeFactory.deploy();
})
it("Should start with an initial balance of 0", async function(){
    const initialContractBalance = await fundMe.provider.getBalance(fundMe.address);
   const  expectedInitialContractBalnce = "0";
   assert(initialContractBalance.toString(), expectedInitialContractBalnce);
})





})