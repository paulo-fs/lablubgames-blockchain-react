import { createContext, ReactNode, useState } from 'react';

interface ProviderPropType{
   children: ReactNode;
}

interface ContextType {
    correctAnswerCounter: number
    wrongAnswerCounter: number
    questionsCounter: number
    questionsIsStarted: boolean
    handleStartQuestions: () => void
    handleAnswersCounters: (value: boolean) => void
    handleQuestionsCounter: () => void
}

export const Context = createContext({} as ContextType);

export function ContextProvider({children}: ProviderPropType){
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
    const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);
    const [questionsCounter, setQuestionsCounter] = useState(0);
    const [questionsIsStarted, setQuestionsIsStarted] = useState(false);

    function handleStartQuestions() {
        setQuestionsIsStarted(true);
        setQuestionsCounter(prevState => prevState = 0);
        setCorrectAnswerCounter(prevState => prevState = 0);
        setWrongAnswerCounter(prevState => prevState = 0);
    }

    function handleAnswersCounters (isCorrect: boolean) {
        if(isCorrect) {
            setCorrectAnswerCounter(prevState => prevState +1);
        } else {
            setWrongAnswerCounter(prevState => prevState +1);
        }
    }

    function handleQuestionsCounter() {
        setQuestionsCounter(prevState => prevState +1);
    }

    return (
        <Context.Provider value={{
            correctAnswerCounter,
            wrongAnswerCounter,
            questionsCounter,
            questionsIsStarted,
            handleStartQuestions,
            handleAnswersCounters,
            handleQuestionsCounter
        }}>
            {children}
        </Context.Provider>
    );
}