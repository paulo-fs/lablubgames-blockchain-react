import { useContext, useState } from "react";
import { Context } from "shared/context";

import { questions } from "shared/services/Data/questions";
import {incorrectAnswer, correctAnswer, mintLBC, startGame} from 'shared/services/gameFunctions';

import Answer from "../Answer";
import {
   PrimaryButton,
   SecondaryButton,
   WrongCorrectAnswerCounter
} from "components";

import { Container } from "./styles";

export default function QuestionContainer() {
   const lowBalanceLimit = 25;
   const {
      lubyContract,selectedAccount, playerBalance, walletBalance, handleAnswersCounters, handleQuestionsCounter,updatePlayerBalance, updateWalletBalance, defineGameOver
   } = useContext(Context);
   const [questionColection, setQuestionColection] = useState(questions);
   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

   function handleAnswerSelection(i: number){
      if(i === selectedAnswer) {
         return setSelectedAnswer(prevState => prevState = null);
      }
      setSelectedAnswer(prevState => prevState = i);
   }

   async function handleConfirmAnswer() {
      if(playerBalance <= lowBalanceLimit){
         return defineGameOver()
      }

      const isCorrect = questionColection[0].answers[selectedAnswer!].correct;

      function changeQuestion(){
         handleAnswersCounters(isCorrect);
         changeToNextQuestion();
         setSelectedAnswer(null);
         handleQuestionsCounter();
      }

      if(isCorrect) {
         return correctAnswer(lubyContract, selectedAccount).then(() => {
             updatePlayerBalance();
             changeQuestion()
         });
     } else {
         return incorrectAnswer(lubyContract, selectedAccount).then(() => {
             updatePlayerBalance();
             changeQuestion()
         });
     }
   }
   
   function changeToNextQuestion(){
      const temporaryArray = questionColection;
      const firstElement = temporaryArray.shift();
      temporaryArray.push(firstElement!);
      setQuestionColection([...temporaryArray]);
   }

   function handleGetCoins(){
      mintLBC(lubyContract, selectedAccount!, 100).then(() => {
         updateWalletBalance()
      })
   }

   async function handleAddBalance(){
      const start = await startGame(lubyContract, selectedAccount);

      if(start){
         updatePlayerBalance();
         updateWalletBalance();
      }
   }

   return (
      <Container>
         { playerBalance > lowBalanceLimit &&
            <>
               <p className="question">
                  {questionColection[0].question}
               </p>
               
               {
                  questionColection[0].answers.map((answ, i) => {
                     const isSelected = (i === selectedAnswer);
                     return (
                        <Answer key={answ.answer} isSelected={isSelected} onClick={() => handleAnswerSelection(i)}>
                           {answ.answer}
                        </Answer>
                     );
                  })
               }

               <PrimaryButton disabled={!(typeof selectedAnswer === 'number')} onClick={handleConfirmAnswer}>
                  Confirm answer
               </PrimaryButton>
            </>
         }

            { playerBalance < lowBalanceLimit &&
               <>
                  <p className="lowBalance">
                     Your balance is low, please add balance to continue.
                     <br/>
                     You can buy more LBCs ir you needed or stop the game.
                  </p>
                  <PrimaryButton onClick={handleAddBalance} disabled={walletBalance < 100}>
                     Add balance and continue
                  </PrimaryButton>
                  <PrimaryButton onClick={handleGetCoins}>
                     Buy more 100 LBCs
                  </PrimaryButton>
               </>
            }

         <div className="stopGame">
            <SecondaryButton  onClick={defineGameOver}>Stop the game</SecondaryButton>
         </div>

         <WrongCorrectAnswerCounter />
      </Container>
   )
}