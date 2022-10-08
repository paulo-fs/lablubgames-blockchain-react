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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
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