import { Btn } from "./styles";

interface BtnProps {
   children: string;
}

export default function PrimaryButton({children}: BtnProps){
   return(
      <Btn>{children}</Btn>
   )
}