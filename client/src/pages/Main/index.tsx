import { CoinsControl, QuestionContainer, StartGame } from "components";
import { useContext } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function Main() {
   const {questionsIsStarted, questionsCounter} = useContext(Context)

   return (
      <Container>
         <div className="header">
            <h1>Play to Earn</h1>
            { (!questionsIsStarted || (questionsCounter === 3)) &&
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
               </p>
            }
         </div>

         { (!questionsIsStarted || (questionsCounter === 3)) &&
            <StartGame />
         }

         { questionsIsStarted && (questionsCounter !== 3) &&
            <QuestionContainer />
         }

         <CoinsControl />

      </Container>
   )
}