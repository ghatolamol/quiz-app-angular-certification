import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuizMakerComponent } from './components/quiz-maker/quiz-maker.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: QuizMakerComponent,
      },
      {
        path: 'result',
        component: QuizResultComponent,
      },
    ],
  },
];
