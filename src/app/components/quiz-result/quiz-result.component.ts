import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/result';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css'],
})
export class QuizResultComponent implements OnInit {
  constructor(private router: Router) {}
  quizData: Result[];
  userAnswers: string[];
  score: number = 0;
  ngOnInit() {
    if (
      localStorage.hasOwnProperty('quizData') &&
      localStorage.hasOwnProperty('userAnswers')
    ) {
      this.quizData = JSON.parse(localStorage.getItem('quizData'));
      this.userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
      this._calculateScore();
    } else {
      console.log('No quiz information available to show');
    }
  }

  private _calculateScore(): void {
    this.userAnswers.forEach((answer, index) => {
      if (this.quizData[index].correct_answer === answer) {
        this.score++;
      }
    });
  }

  createNewQuiz() {
    this.router.navigateByUrl('/');
  }
}
