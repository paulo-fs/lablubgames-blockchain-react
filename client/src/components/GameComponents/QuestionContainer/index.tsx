import { useState } from "react";

import Answer from "../Answer";

import { questions } from "shared/services/Data/questions";

import { Container } from "./styles";

export default function QuestionContainer() {
   const [questionColection, setQuestionColection] = useState(questions);
   console.log(questions);

   function handleAnswerSelection(isCorrect: boolean){
      console.log(isCorrect);
   }

   return (
      <Container>
         <p className="question">
            {questionColection[0].question}
         </p>
         
         {
            questionColection[0].answers.map(answ => {
               return (
                  <Answer key={answ.answer} onClick={() => handleAnswerSelection(answ.correct)}>
                     {answ.answer}
                  </Answer>
               );
            })
         }
         {/* <Answer>Aswer a</Answer>
         <Answer>Aswer b</Answer>
         <Answer>Aswer c</Answer>
         <Answer>Aswer d</Answer> */}

      </Container>
   )
}