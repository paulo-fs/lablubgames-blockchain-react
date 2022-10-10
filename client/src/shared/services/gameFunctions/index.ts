function mintLBC(contract: any, account: string, amount: number) {
   contract.methods.mintLbc(amount).send({ from: account })
      .then((output: any) => console.log('mintLbc mintLbc', output));

   return contract.methods.approve(amount).send({ from: account })
      .then((approve: any) => {
         console.log('mintLbc approve', approve);
         return approve;
      })
}

async function startGame(contract: any, account: any) {
   const amount = 100;
   const response = await contract.methods.startGame(amount).send({from: account});
   await contract.events.StartGame((error: any, event: any) => console.log(error, event));

   return Object.keys(response).includes('transactionHash');
}

async function  correctAnswer(contract: any) {
   await contract.methods.correctAnswer(20);
}

async function incorrectAnswer(contract: any) {
   await contract.methods.incorrectAnswer(30).call();
}

async function withdrawAll(contract: any) {
   await contract.withdraw();
}

async function getBalanceOf(contract: any, account: string): Promise<number>{
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