import {PrimaryButton} from "components";
import { useContext } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function StartGame () {
   const {handleStartQuestions} = useContext(Context)

   return (
      <Container>
         <p>
            Click <span>I'm ready</span> to start the game.
         </p>
         <PrimaryButton onClick={handleStartQuestions}>
            I'm ready
         </PrimaryButton>
      </Container>
   )
}