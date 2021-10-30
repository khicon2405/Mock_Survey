export class Option {
  id: any;

  name: string;
  isCorrect: boolean;
  selected: boolean;

  constructor(data: any, correct: any) {
    data = data || {};
    this.id = (Math.random() * 100).toFixed(8);

    this.name = data;
    this.isCorrect = this.name === correct ? true : false;
    this.selected = false;
  }
}
