import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface AnswerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: string;
   isSelected: boolean
}

export default function Answer({children, ...rest} : AnswerProps){
   return (
      <Container {...rest}>
         <p>{children}</p>
      </Container>
   )
}