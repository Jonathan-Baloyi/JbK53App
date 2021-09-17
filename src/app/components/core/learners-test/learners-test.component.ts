import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/IQuestion';
import { HeavyVehicleService } from 'src/app/services/heavy-vehicle.service';

@Component({
  selector: 'app-learners-test',
  templateUrl: './learners-test.component.html',
  styleUrls: []
})
export class LearnersTestComponent implements OnInit {

  public questions: IQuestion[] = [];
  public showCorrectAnswer = false;

  constructor(private heavyVehicleService: HeavyVehicleService) { }

  ngOnInit(): void {
    this.heavyVehicleService.getQuestions().subscribe(result => {
      this.questions = result;
    })
  }

  radioChecked(answer, question) {
    console.log("Clicked");
    console.log(answer);
  }

  showAnswer() {
    this.showCorrectAnswer = !this.showCorrectAnswer;
  }

}
