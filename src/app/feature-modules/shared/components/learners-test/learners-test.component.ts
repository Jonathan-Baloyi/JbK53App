import { Component, Input } from '@angular/core';
import { IQuestion } from '../../models/IQuestion';
import { LearnersTestService } from '../../services/heavy-vehicle.service';

@Component({
  selector: 'app-learners-test',
  templateUrl: './learners-test.component.html',
})
export class LearnersTestComponent {
  @Input() learnersTestType: string;

  public questions: IQuestion[] = [];
  public showCorrectAnswer = false;
  public checked = false;

  constructor(private learnersTestService: LearnersTestService) {}

  ngOnInit(): void {
    this.learnersTestService.getQuestions().subscribe((result) => {
      this.questions = result;
    });
  }

  radioChecked(answer, question) {
    console.log('Clicked');
    console.log(answer);
    this.checked = true;
  }

  showAnswer(checked) {
    console.log(checked);
  }
}
