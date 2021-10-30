import { Component, OnInit } from '@angular/core';
import { Questions, Survey } from 'src/app/_models';
import { SurveyService } from 'src/app/_services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  questions: Questions[] = [];
  survey: Survey = new Survey(null);
  mode = 'survey';

  pager = {
    index: 0,
    size: 1,
    count: 1,
  };
  timer: any = null;
  startTime: Date = new Date();
  endTime: Date | undefined;
  ellapsedTime = '00:00';
  duration = '';
  maxTime = 100000;

  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.loadQuiz();
    this.fetch();
  }
  fetch() {
    this.surveyService.fetchQuestion().subscribe((res: any) => {
      console.log('API: ', res);
    });
  }
  loadQuiz() {
    this.surveyService.getQuestion().subscribe((res) => {
      console.log(res);
      this.survey = new Survey(res);
      console.log('truoc', this.survey);
      this.questions = this.survey.questions;
      this.pager.count = this.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => {
        this.tick();
      }, 1000);
      this.duration = this.parseTime(this.maxTime);
      console.log('truoc', this.questions);
    });

    

    this.mode = 'survey';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.maxTime) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }
  test() {}
  get filteredQuestion() {
    return this.questions
      ? this.questions.slice(
          this.pager.index,
          this.pager.index + this.pager.size
        )
      : [];
  }

  onSelected(question: any, option: any) {
    question.options.forEach((e: any) => {
      if (e.id !== option.id) {
        e.selected = false;
      }
      console.log(e);
    });
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      // this.mode = "quiz";
    }
  }

  isAnswered(question: Questions): string {
    return question.options.find((x: any) => x.selected)
      ? 'Answered'
      : 'Not Answered';
  }

  isCorrect(question: Questions) {
    return question.options.every((o: any) => {
      return o.selected === o.isCorrect;
    })
      ? 'correct'
      : 'wrong';
  }

  //   isCorrect(question: Question) {
  //     return question.options.every((x) => x.selected === x.isAnswer)
  //       ? "correct"
  //       : "wrong";
  //   }

  onSubmit() {
    let answers = [];

    // Post your data to the server here. answers contains the questionId and the users' answer.

    this.mode = 'result';
    console.log(this.questions);
  }
}
