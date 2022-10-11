function mintLBC(contract: any, account: string, amount: number) {
   return contract.methods.mintLbc(amount).send({ from: account })
}

async function startGame(contract: any, account: any) {
   const amount = 100;
   
   await contract.methods.approve(amount).send({ from: account })
      .then((approve: any) => {
         return approve;
      })

   const response = await contract.methods.startGame(amount).send({from: account});

   return Object.keys(response).includes('transactionHash');
}

async function  correctAnswer(contract: any, acc: any) {
   const response = await contract.methods.correctAnswer(20).send({from: acc});
   return Object.keys(response).includes('transactionHash');
}

async function incorrectAnswer(contract: any, acc: any) {
   const response = await contract.methods.incorrectAnswer(20).send({from: acc});
   return Object.keys(response).includes('transactionHash');
}

async function withdrawAll(contract: any, acc: any) {
   await contract.methods.withdraw().send({from: acc});
}

async function getBalanceOf(contract: any, account: string): Promise<number | undefined>{
   if(!contract || !account){
      return;
   }
   return await contract.methods.balanceOf(account).call();
}

async function claimBalance(contract: any, acc: any) {
   await contract.methods.claimBalance(0).send({from: acc})
}

async function getBalanceIndividual(contract: any, acc: any): Promise<number> {
   return await contract.methods.getBalanceIndividual().call({from: acc});
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