import {PrimaryButton, WrongCorrectAnswerCounter} from "components";
import { useContext } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function StartGame () {
   const {handleStartQuestions, gameIsOver} = useContext(Context)

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

         <PrimaryButton onClick={handleStartQuestions}>
            I'm ready
         </PrimaryButton>

         { gameIsOver && 
            <WrongCorrectAnswerCounter />
         }
      </Container>
   )
}