import { useContext } from "react";

import {claimBalance, mintLBC, withdrawAll} from 'shared/services/gameFunctions';

import {PrimaryButton, SecondaryButton} from "components";
import { Context } from "shared/context";

import { BalanceBox, Container } from "./styles";

export default function CoinsControl(){
   const tokenPurshaseAmout = 100;
   const {
      gameOwner,
      lubyContract, 
      selectedAccount, 
      playerBalance, 
      walletBalance, 
      questionsIsStarted,
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
               <>
                  <SecondaryButton onClick={handleClaimCoins}  disabled={playerBalance <= 0}>
                     Claim coins
                  </SecondaryButton>
                  { playerBalance <= 0 &&
                     <p className="noFunds">
                        No LBCs to claim.
                     </p>
                  }
               </>
            }
         </BalanceBox>

         <BalanceBox>
            <div className="balance">
               <span>{walletBalance} LBCs</span>
               <h2>Game wallet balance:</h2>
            </div>

            { !questionsIsStarted  &&
               <>
                  <PrimaryButton onClick={getCoins}>
                     {`Buy ${tokenPurshaseAmout} LBC`}
                  </PrimaryButton>
                  { (gameOwner === selectedAccount) &&
                     <SecondaryButton onClick={handleWithdrawAll}>
                        Withdraw all balance
                     </SecondaryButton>
                  }
               </>
            }
         </BalanceBox>
      </Container>
   )
}