import { CoinsControl, QuestionContainer, StartGame } from "components";
import { useContext } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function Main() {
   const {questionsIsStarted, gameIsOver} = useContext(Context)

   return (
      <Container>
         <div className="header">
            <h1>Play to Earn</h1>
            { (!questionsIsStarted || (gameIsOver)) &&
               <p>
                  You need at least 100 LBCs to start the game. When started, 100 LBCs will be transfered to game balance and you can claim it at the end of the game. <br/>
                  Incorrect answer: -20LBCs | Correct answer: +20LBCs
               </p>
            }
         </div>

         { (!questionsIsStarted || (gameIsOver)) &&
            <StartGame />
         }

         { questionsIsStarted && (!gameIsOver) &&
            <QuestionContainer />
         }

         <CoinsControl />

      </Container>
   )
}