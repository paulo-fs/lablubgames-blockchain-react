import { ButtonHTMLAttributes, ReactNode } from "react";

import { Btn } from "./styles";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   children: ReactNode
}

export default function SecondaryButton({children, ...rest}: BtnProps){
   return (
      <Btn {...rest}>
         {children}
      </Btn>
   )
}