import Web3 from "web3";
const LubyGame = require('../../../contracts/LubyGame.json');

   function getWeb3() {
      const provider = (window as any).ethereum;
      if(typeof provider === "undefined") {
         console.log('Install metamask');
      }
      return new Web3(Web3.givenProvider || 'ws://localhost:7545');
   }

   async function getContract(web3: Web3){
      const networkId = await web3.eth.net.getId();
      const network = LubyGame.networks[networkId];
      
      return new web3.eth.Contract(
         LubyGame.abi,
         network && network.address
      );
   }

   async function getAccount(web3: Web3){
      let accounts = await web3.eth.getAccounts();
      let account = accounts[0];

      return account;
   }


   function getAllowance(contract: any, account: string): number{
      return contract.methods.allowance(account).call();
   }

   export {
      getWeb3,
      getContract,
      getAccount,
      getAllowance,
   }
