import { useContext, useState } from "react";

import { questions } from "shared/services/Data/questions";

import Answer from "../Answer";
import {
   PrimaryButton,
   WrongCorrectAnswerCounter
} from "components";

import { Container } from "./styles";
import { Context } from "shared/context";

export default function QuestionContainer() {
   const {handleAnswersCounters, handleQuestionsCounter} = useContext(Context);
   const [questionColection, setQuestionColection] = useState(questions);
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

   function handleAnswerSelection(isCorrect: boolean, i: number){
      if(i === selectedAnswer) {
         return setSelectedAnswer(prevState => prevState = null);
      }
      setSelectedAnswer(prevState => prevState = i);
   }

   function handleConfirmAnswer() {
      // handleAnswersCounters()
   }
   
   function changeToNextQuestion(){
      const temporaryArray = questionColection;
      const firstElement = temporaryArray.shift();
      temporaryArray.push(firstElement!);
      setQuestionColection([...temporaryArray]);
   }

   return (
      <Container>
         <p className="question">
            {questionColection[0].question}
         </p>
         
         {
            questionColection[0].answers.map((answ, i) => {
               const isSelected = (i === selectedAnswer);
               return (
                  <Answer key={answ.answer} isSelected={isSelected} onClick={() => handleAnswerSelection(answ.correct, i)}>
                     {answ.answer}
                  </Answer>
               );
            })
         }

         <PrimaryButton disabled={!selectedAnswer} onClick={changeToNextQuestion}>Confirm answer</PrimaryButton>

         <WrongCorrectAnswerCounter />
      </Container>
   )
}