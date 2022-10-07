import {PrimaryButton} from "components";
import { Container } from "./styles";

export default function StartGame () {
   return (
      <Container>
         <p>
            Click <span>I'm ready</span> to start the game.
         </p>
         <PrimaryButton>
            I'm ready
         </PrimaryButton>
      </Container>
   )
}