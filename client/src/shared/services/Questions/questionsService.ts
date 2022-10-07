import { IQuestionService, Response } from 'shared/types/services/questionsServiceInterface';
import api from '../api';

export default function questionsService():IQuestionService {
	async function getQuestions(): Promise<Response> {
		return api.get('questions.JSON');
	}

	return { getQuestions };
}