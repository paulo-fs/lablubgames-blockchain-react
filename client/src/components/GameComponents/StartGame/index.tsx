import {PrimaryButton, WrongCorrectAnswerCounter} from "components";
import { useContext } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function StartGame () {
   const {handleStartQuestions, questionsCounter} = useContext(Context)

   return (
      <Container>
         { questionsCounter !== 3  &&
            <p>
               Click <span>I'm ready</span> to start the game.
            </p>
         }

         { questionsCounter === 3  &&
            <p>
               <span className="gameOver">Game over</span>, click <span>I'm ready</span> to play again.
            </p>
         }

         <PrimaryButton onClick={handleStartQuestions}>
            I'm ready
         </PrimaryButton>

         { questionsCounter === 3 && 
            <WrongCorrectAnswerCounter />
         }
      </Container>
   )
}