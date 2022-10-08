import { ButtonHTMLAttributes } from "react";

import { Btn } from "./styles";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: string;
}

export default function PrimaryButton({children, ...rest}: BtnProps){
   return(
      <Btn {...rest}>{children}</Btn>
   )
}