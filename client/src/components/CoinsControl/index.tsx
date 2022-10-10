import { useContext } from "react";

import {claimBalance, mintLBC, withdrawAll} from 'shared/services/gameFunctions';

import {PrimaryButton, SecondaryButton} from "components";
import { Context } from "shared/context";

import { BalanceBox, Container } from "./styles";

export default function CoinsControl(){
   const tokenPurshaseAmout = 100;
   const {
      questionsIsStarted,
      playerBalance, 
      lubyContract, 
      gameOwner,
      selectedAccount, 
      walletBalance, 
      updatePlayerBalance, 
      updateWalletBalance
   } = useContext(Context);

   function handleClaimCoins(){
      claimBalance(lubyContract, selectedAccount)
      .then(() => {
         updatePlayerBalance();
         updateWalletBalance();
      });
   }

   function handleWithdrawAll() {
      withdrawAll(lubyContract, selectedAccount).then(() => {
         updateWalletBalance();
      })
   }

   function getCoins(){
      mintLBC(lubyContract, selectedAccount!, tokenPurshaseAmout).then(() => {
         updateWalletBalance()
      })
   }

   return (
      <Container>
         <BalanceBox>
            <div className="balance">
               <span>{playerBalance} LBCs</span>
               <h2>Game balance:</h2>
            </div>

            { !questionsIsStarted &&
               <SecondaryButton onClick={handleClaimCoins}>
                  Withdral
               </SecondaryButton>
            }
         </BalanceBox>

         <BalanceBox>
            <div className="balance">
               <span>{walletBalance} LBCs</span>
               <h2>Game wallet balance:</h2>
            </div>

            { !questionsIsStarted  &&
               <>
                  { (gameOwner === selectedAccount) &&
                     <SecondaryButton onClick={handleWithdrawAll}>
                        Withdraw from wallet
                     </SecondaryButton>
                  }
                  <PrimaryButton onClick={getCoins}>
                     {`Buy ${tokenPurshaseAmout} LBC`}
                  </PrimaryButton>
               </>
            }
         </BalanceBox>
      </Container>
   )
}