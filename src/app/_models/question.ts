import { Option } from './option';

export class Questions {
  _id: any;
  question: string = '';

  options: Option[] = [];
  correctanswer: string = '';
  isSelected: boolean | null;

  constructor(data: any) {
    data = data || {};
    this._id = data._id.$oid;
    this.question = data.question;
    this.correctanswer = data.correctanswer;
    const resAns = [data.answer1, data.answer2, data.answer3, data.answer4];
    resAns.forEach((e: any) => {
      this.options.push(new Option(e,this.correctanswer));
    });
    
    this.isSelected = false;
  }
}
