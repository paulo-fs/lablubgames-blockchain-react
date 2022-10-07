import { CoinsControl, QuestionContainer, StartGame } from "components";
import { Container } from "./styles";

export default function Main() {
   return (
      <Container>
         <div className="header">
            <h1>Play to Earn</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit.
            </p>
         </div>

         {/* <StartGame /> */}

         <QuestionContainer />

         <CoinsControl />

      </Container>
   )
}