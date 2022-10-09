import { createContext, ReactNode, useEffect, useState } from 'react';
import {
    getWeb3,
    getContract,
    getAccount,
    getBalanceOf,
    getAllowance,
 } from 'shared/services/loadWeb3';
import { Contract } from 'web3-eth-contract';

interface ProviderPropType{
   children: ReactNode;
}

interface ContextType {
    correctAnswerCounter: number
    wrongAnswerCounter: number
    questionsCounter: number
    questionsIsStarted: boolean
    gameIsOver: boolean
    selectedAccount: string | undefined
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
    const [gameIsOver, setGameIsOver] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<string>();
    const [lubyContract, setLubyContract] = useState<Contract | any>();
    const [balanceOf, setBalanceOf] = useState<number>();


    function handleStartQuestions() {
        setQuestionsIsStarted(true);
        setGameIsOver(false);
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
        
        if(questionsCounter === 2) {
            setGameIsOver(prevState => !prevState);
        }
    }

    function detectAccountChange(): string{
        const provider = (window as any).ethereum;
        return provider.on('accountsChanged', (newAccounts: string[]) => {
            console.log('account changed', newAccounts[0])
            setSelectedAccount(newAccounts[0]);
        })
    }

    useEffect(() => {
        async function loadWeb3(){
            const web3 = getWeb3();
            const lubyGameContract = await getContract(web3);
            const account = await getAccount(web3);
            const balanceOf = getBalanceOf(lubyGameContract, account);
            const allowanceOf = getAllowance(lubyGameContract, account);

            setSelectedAccount(account);
            setLubyContract(lubyGameContract);
            setBalanceOf(balanceOf);
        }
        
        detectAccountChange();

        if(lubyContract){
            return ;
        }
        loadWeb3();
    }, [lubyContract]);

    


    return (
        <Context.Provider value={{
            correctAnswerCounter,
            wrongAnswerCounter,
            questionsCounter,
            questionsIsStarted,
            gameIsOver,
            selectedAccount,
            handleStartQuestions,
            handleAnswersCounters,
            handleQuestionsCounter
        }}>
            {children}
        </Context.Provider>
    );
}