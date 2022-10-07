export interface Response {
   questions: Question[];
}

export interface Question {
   question: string;
   answers:  Answer[];
}

export interface Answer {
   answer:  string;
   correct: boolean;
}

export interface IQuestionService{
   getQuestions: () => Promise<Response>,
}
 