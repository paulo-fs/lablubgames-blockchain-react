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

      new web3.eth.Contract(
         LubyGame.abi,
         network && network.address
      ).events.StartGame()
      .on("data", () => console.log('oi'));
      
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

   function getBalanceOf(contract: any, account: string): number{
      return contract.methods.balanceOf(account).call();
   }

   function getAllowance(contract: any, account: string): number{
      return contract.methods.allowance(account).call();
   }

   function mintLbc(contract: any, account: string, amount: number) {
      contract.methods.mintLbc(amount).send({ from: account })
         .then((output: any) => console.log('mintLbc mintLbc', output));

      return contract.methods.approve(amount).send({ from: account })
         .then((approve: any) => {
            console.log('mintLbc approve', approve);
            return approve;
         })
   }

   async function getBalanceIndividual(contract: any) {
      try {
          const balance = await contract.methods
              .getBalanceIndividual().call();
          console.log(balance);
          return balance;
      }
      catch(error){
          console.log('getBalanceIndividual', error);
      }
  }

   export {
      getWeb3,
      getContract,
      getAccount,
      getBalanceOf,
      getAllowance,
      mintLbc,
      getBalanceIndividual
   }
