import { Result } from '../interfaces/result';
export interface QuizResponse {
  response_code: number;
  results: Result[];
}
