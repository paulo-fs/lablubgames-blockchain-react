import { useContext } from "react";

import {claimBalance} from 'shared/services/gameFunctions';

import {PrimaryButton} from "components";
import { Context } from "shared/context";

import { Container } from "./styles";

export default function CoinsControl(){
   const {playerBalance, lubyContract, selectedAccount, updatePlayerBalance} = useContext(Context);

   function handleClaimCoins(){
      claimBalance(lubyContract, selectedAccount)
      .then(() => updatePlayerBalance);
   }

   return (
      <Container>
         <div className="balance">
            <h2>Balance in Game:</h2>
            <span>{playerBalance} LBCs</span>
         </div>

         <PrimaryButton onClick={handleClaimCoins}>
            Withdral
         </PrimaryButton>
      </Container>
   )
}