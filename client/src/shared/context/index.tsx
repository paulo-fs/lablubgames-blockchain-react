import { createContext, ReactNode, useEffect, useState } from 'react';
import {
    getWeb3,
    getContract,
    getAccount,
 } from 'shared/services/loadWeb3';
 import {getBalanceIndividual, correctAnswer, incorrectAnswer, getBalanceOf} from 'shared/services/gameFunctions';
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
    lubyContract: any
    gameOwner: string
    playerBalance: any
    walletBalance: any
    handleStartQuestions: () => void
    handleAnswersCounters: (value: boolean) => void
    handleQuestionsCounter: () => void
    defineGameOver: () => void
    updatePlayerBalance: () => void
    updateWalletBalance: () => void
}

export const Context = createContext({} as ContextType);

export function ContextProvider({children}: ProviderPropType){
    const gameOwner = '0x66daFaA1Ee1B6f620a968A54dCF5C2cb4f38aA71';
    const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
    const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);
    const [questionsCounter, setQuestionsCounter] = useState(0);
    const [questionsIsStarted, setQuestionsIsStarted] = useState(false);
    const [gameIsOver, setGameIsOver] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<string>();
    const [lubyContract, setLubyContract] = useState<Contract | any>();
    const [playerBalance, setPlayerBalance] = useState<number>();
    const [walletBalance, setWalletBalance] = useState<number>();

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

    function defineGameOver(){
        localStorage.setItem('lbg:started', 'false');
        setGameIsOver(true);
        setQuestionsIsStarted(false);
    }

    function handleQuestionsCounter() {
        setQuestionsCounter(prevState => prevState +1);
        
        if(questionsCounter === 2) {
            defineGameOver()
        }
    }

    async function updatePlayerBalance(){
        if(!lubyContract || !selectedAccount){
            return;
        }
        const balance = await getBalanceIndividual(lubyContract);
        setPlayerBalance(balance);
    }

    async function updateWalletBalance(){
        if(!lubyContract || !selectedAccount){
            return;
        }
        const wallet = await getBalanceOf(lubyContract, selectedAccount!)
        setWalletBalance(wallet);
    }

    async function detectAccountChange() {
        const provider = (window as any).ethereum;
        return provider.on('accountsChanged', async (newAccounts: string[]) => {
            setSelectedAccount(newAccounts[0]);
        })
    }

    useEffect(() => {
        async function loadWeb3(){
            const web3 = getWeb3();

            const lubyGameContract = await getContract(web3);
            setLubyContract(lubyGameContract);

            const account = await getAccount(web3);
            setSelectedAccount(account);

            const balance = await getBalanceIndividual(lubyGameContract);
            setPlayerBalance(balance);
            
            const isStarted: boolean = JSON.parse(localStorage.getItem('lbg:started')!);
            if(isStarted) {
                setQuestionsIsStarted(true);
            }
        }
        
        detectAccountChange();
        updateWalletBalance();
        updatePlayerBalance();

        loadWeb3();
    }, [selectedAccount]);

    return (
        <Context.Provider value={{
            correctAnswerCounter,
            wrongAnswerCounter,
            questionsCounter,
            questionsIsStarted,
            gameIsOver,
            selectedAccount,
            lubyContract,
            gameOwner,
            playerBalance,
            walletBalance,
            handleStartQuestions,
            handleAnswersCounters,
            handleQuestionsCounter,
            defineGameOver,
            updatePlayerBalance,
            updateWalletBalance
        }}>
            {children}
        </Context.Provider>
    );
}