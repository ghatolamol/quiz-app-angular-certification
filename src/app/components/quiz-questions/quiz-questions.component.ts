import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../interfaces/result';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css'],
})
export class QuizQuestionsComponent implements OnInit {
  @Input() quizData: Result[];
  userAnswers: string[] = [];
  showQuizSubmitBtn: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  onSelectOption(questionIndex: number, option: string) {
    this.userAnswers[questionIndex] = option;
    this.showSubmitBtn();
  }

  private showSubmitBtn() {
    this.showQuizSubmitBtn =
      this.userAnswers.filter(Boolean).length === this.quizData.length;
  }

  submitQuiz() {
    localStorage.setItem('quizData', JSON.stringify(this.quizData));
    localStorage.setItem('userAnswers', JSON.stringify(this.userAnswers));
    this.router.navigateByUrl('/result');
  }
}
