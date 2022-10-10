import { useContext } from "react";

import {startGame } from 'shared/services/gameFunctions';

import {PrimaryButton, WrongCorrectAnswerCounter} from "components";
import { Context } from "shared/context";

import { Container } from "./styles";

export default function StartGame () {
   const {handleStartQuestions, updatePlayerBalance, updateWalletBalance, gameIsOver, lubyContract, selectedAccount} = useContext(Context);

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

         <PrimaryButton onClick={handleStartGame}>
            I'm ready
         </PrimaryButton>

         { gameIsOver && 
            <WrongCorrectAnswerCounter />
         }
      </Container>
   )
}