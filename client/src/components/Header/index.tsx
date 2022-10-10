import { useContext, useEffect, useState } from "react";

import PrimaryButton from "components/Buttons/Primary";

import { Context } from "shared/context";
import {mintLBC } from 'shared/services/gameFunctions';
import {getBalanceOf} from 'shared/services/loadWeb3';

import { Container } from "./styles";

export default function Header() {
   const tokenPurshaseAmout = 100;
   const [coinsInAcc, setCoinsInAcc] = useState<number>();
   const {lubyContract, selectedAccount, updatePlayerBalance} = useContext(Context);

   function getCoins(){
      mintLBC(lubyContract, selectedAccount!, tokenPurshaseAmout)
      .then(async () => {
         updatePlayerBalance();
      }).catch((error: any)=> {
         console.log(error)
      });

   }

   useEffect(() => {
      getBalanceOf(lubyContract, selectedAccount!)
      .then(response => setCoinsInAcc(response));
   }, [selectedAccount, lubyContract])

   return (
      <Container>
         <div>
            <h4>LabLuby Games</h4>
            <div className="constrols">
               <span>{`Total LBCs: ${coinsInAcc}`}</span>
               <PrimaryButton onClick={getCoins}>
                  {`Buy ${tokenPurshaseAmout} LBCs`}
               </PrimaryButton>
            </div>
         </div>
      </Container>
   )
}