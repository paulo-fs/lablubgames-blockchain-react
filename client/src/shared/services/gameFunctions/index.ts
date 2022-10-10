function mintLBC(contract: any, account: string, amount: number) {
   return contract.methods.mintLbc(amount).send({ from: account })
      .then((output: any) => console.log('mintLbc mintLbc', output));
}

async function startGame(contract: any, account: any) {
   const amount = 100;
   
   await contract.methods.approve(amount).send({ from: account })
      .then((approve: any) => {
         console.log('mintLbc approve', approve);
         return approve;
      })

   const response = await contract.methods.startGame(amount).send({from: account});
   await contract.events.StartGame((error: any, event: any) => console.log(error, event));

   return Object.keys(response).includes('transactionHash');
}

async function  correctAnswer(contract: any, acc: any) {
   return await contract.methods.correctAnswer(20).send({from: acc});
}

async function incorrectAnswer(contract: any, acc: any) {
   return await contract.methods.incorrectAnswer(30).send({from: acc});
}

async function withdrawAll(contract: any, acc: any) {
   await contract.methods.withdraw().send({from: acc});
}

async function getBalanceOf(contract: any, account: string): Promise<number | undefined>{
   console.log(contract)
   if(!contract || !account){
      return;
   }
   return await contract.methods.balanceOf(account).call();
}

async function claimBalance(contract: any, acc: any) {
   await contract.methods.claimBalance(30).send({from: acc})
}

async function getBalanceIndividual(contract: any): Promise<number> {
   return await contract.methods
          .getBalanceIndividual().call();
}

export {
   mintLBC,
   startGame,
   correctAnswer,
   incorrectAnswer,
   withdrawAll,
   getBalanceOf,
   claimBalance,
   getBalanceIndividual
}