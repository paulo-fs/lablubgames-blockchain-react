import { useContext, useEffect } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function Header() {
   const {selectedAccount, gameOwner} = useContext(Context);

   useEffect(() => {}, [selectedAccount])

   return (
      <Container>
         <div>
            <h4>LabLuby Games</h4>
            <p className="account">
               Account:
               <span>{ gameOwner === selectedAccount
                  ? 'Game Owner Account'
                  : selectedAccount
               }</span>
            </p>
         </div>
      </Container>
   )
}