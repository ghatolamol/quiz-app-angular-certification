import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category';
import { Difficulty } from '../../interfaces/difficulty';
import { QuizParams } from '../../interfaces/quiz-params';
import { Result } from '../../interfaces/result';
import { QuizMakerService } from '../../services/quiz-maker.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent implements OnInit {
  quizMakerForm: FormGroup;
  categoryList$: Observable<Category[]>;
  difficultyLevels: Difficulty[] = ['easy', 'medium', 'hard'];
  quizData$: Observable<Result[]>;
  constructor(
    private formBuilder: FormBuilder,
    private quizMakerService: QuizMakerService
  ) {}

  ngOnInit() {
    this.quizMakerForm = this.formBuilder.group({
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
    });
    this.categoryList$ = this.quizMakerService.getCategoryList();
  }

  private getQuiz(params: QuizParams) {
    this.quizData$ = this.quizMakerService.getQuiz(params);
  }

  onSubmit() {
    if (this.quizMakerForm.valid) {
      this.getQuiz(this.quizMakerForm.value);
    } else {
      console.log('invalid form data');
    }
  }
}
