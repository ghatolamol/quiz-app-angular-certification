import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizMakerComponent } from './components/quiz-maker/quiz-maker.component';
import { QuizQuestionsComponent } from './components/quiz-questions/quiz-questions.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    QuizMakerComponent,
    QuizResultComponent,
    QuizQuestionsComponent,
    HighlightDirective,
    SafeHtmlPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
