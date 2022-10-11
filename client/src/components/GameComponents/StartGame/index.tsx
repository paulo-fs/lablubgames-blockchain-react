import { useContext } from "react";

import {startGame } from 'shared/services/gameFunctions';

import {PrimaryButton, WrongCorrectAnswerCounter} from "components";
import { Context } from "shared/context";

import { Container } from "./styles";

export default function StartGame () {
   const {handleStartQuestions, updatePlayerBalance, updateWalletBalance, gameIsOver, lubyContract, selectedAccount, walletBalance} = useContext(Context);

   async function handleStartGame(){
      const start = await startGame(lubyContract, selectedAccount);

      if(start){
         updatePlayerBalance();
         updateWalletBalance();
         localStorage.setItem('lbg:started', 'true');
         return handleStartQuestions();
      }
   }

   return (
      <Container>
         { !gameIsOver  &&
            <p>
               Click <span>I'm ready</span> to start the game.
            </p>
         }

         { gameIsOver  &&
            <>
               <p>
                  <span className="gameOver">Game over!</span>
               </p>
               <p>
                  Click <span>I'm ready</span> to play again.
               </p>
            </>
         }

         <PrimaryButton onClick={handleStartGame} disabled={walletBalance < 100}>
            I'm ready
         </PrimaryButton>

         { walletBalance < 100 &&
            <p className="noFunds">
               You need at least 100 LBCs to start. <span>Buy some LBCs.</span>
            </p>
         }

         { gameIsOver && 
            <WrongCorrectAnswerCounter />
         }
      </Container>
   )
}