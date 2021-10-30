import { Questions } from './question';
import { SurveyConfig } from './survey-config';

export class Survey {
  id = 1;
  name: string = 'Survey';

  config: SurveyConfig | undefined;
  questions: Questions[] = [];

  constructor(data: any) {
    if (data) {
      // this.config = new SurveyConfig(data.config);
      // this.questions = [data.answer1, data.answer2, data.answer3, data.answer4];
      this.questions = [];
      data.forEach((q: any) => {
        this.questions.push(new Questions(q));
      });
      // data.questions.forEach((q: any) => {
      //   this.questions.push(new Questions(q));
      // });
    }
  }
}
