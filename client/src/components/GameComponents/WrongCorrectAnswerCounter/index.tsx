import { useContext } from "react";
import { Context } from "shared/context";
import { Container } from "./styles";

export default function WrongCorrectAnswerCounter() {
   const {correctAnswerCounter, wrongAnswerCounter} = useContext(Context);

   return (
      <Container>
         <div>
            <h4 className="correct">Correct answers:</h4>
            <span className="correct">{correctAnswerCounter}</span>
         </div>

         <div>
            <h4 className="wrong">Wrong answers:</h4>
            <span className="wrong">{wrongAnswerCounter}</span>
         </div>
      </Container>
   )
}