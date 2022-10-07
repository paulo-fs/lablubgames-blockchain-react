import {PrimaryButton} from "components";
import { Container } from "./styles";

export default function CoinsControl(){
   return (
      <Container>
         <div className="balance">
            <h2>Balance:</h2>
            <span>100 LBCs</span>
         </div>

         <PrimaryButton>
            Withdral
         </PrimaryButton>
      </Container>
   )
}