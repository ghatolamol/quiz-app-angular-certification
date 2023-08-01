import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../interfaces/category';
import { QuizParams } from '../interfaces/quiz-params';
import { Result } from '../interfaces/result';
import { CategoryResponse } from '../models/category-response';
import { QuizResponse } from '../models/quiz-response';
@Injectable({ providedIn: 'root' })
export class QuizMakerService {
  private categoryListApi: string = `${environment.API_DOMAIN}/api_category.php`;
  private quizApi: string = `${environment.API_DOMAIN}/api.php`;
  private quizType: string = 'multiple';
  private quizAmount: number = 5;
  constructor(private http: HttpClient) {}

  getCategoryList(): Observable<Category[]> {
    return this.http.get<CategoryResponse>(this.categoryListApi).pipe(
      map((resp) => resp.trivia_categories),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        throw new Error('Something went wrong');
      })
    );
  }

  getQuiz(quizParam: QuizParams): Observable<Result[]> {
    const params = new HttpParams()
      .set('amount', this.quizAmount)
      .set('category', quizParam.category)
      .set('difficulty', quizParam.difficulty)
      .set('type', this.quizType);
    return this.http.get<QuizResponse>(this.quizApi, { params }).pipe(
      map((resp) =>
        resp.results.map((qts) => {
          qts['options'] = this.answersInRandomOrder([
            ...qts.incorrect_answers,
            qts.correct_answer,
          ]);
          return qts;
        })
      ),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        throw new Error('Something went wrong');
      })
    );
  }

  private answersInRandomOrder(options: string[]): string[] {
    return options
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }
}
