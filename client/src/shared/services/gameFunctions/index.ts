function mintLBC(contract: any, account: string, amount: number) {
   contract.methods.mintLbc(amount).send({ from: account })
      .then((output: any) => console.log('mintLbc mintLbc', output));

   return contract.methods.approve(amount).send({ from: account })
      .then((approve: any) => {
         console.log('mintLbc approve', approve);
         return approve;
      })
}

function startGame() {}

function  correctAnswer() {}

function incorrectAnswer() {}

function withdrawAll() {}

async function getBalanceOf(contract: any, account: string): Promise<number>{
   return await contract.methods.balanceOf(account).call();
}

function claimBalance() {}

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
   mintLBC,
   startGame,
   correctAnswer,
   incorrectAnswer,
   withdrawAll,
   getBalanceOf,
   claimBalance,
   getBalanceIndividual
}