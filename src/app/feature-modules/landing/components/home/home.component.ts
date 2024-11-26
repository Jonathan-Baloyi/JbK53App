import { Component, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [],
    standalone: false
})
export class HomeComponent implements OnInit {
  learnersTestTypes = signal([
    {
      title: 'Light Motor Vehicle(Code 08 or B)',
      imageUrl: 'assets/icons/light.jpg',
      link: '/light-vehicle',
    },
    {
      title: 'Heavy Motor Vehicle (Code 10 or C1)',
      imageUrl: 'assets/icons/truck.jpg',
      link: '/heavy-vehicle/code-ten',
    },
    {
      title: 'Motor Cycle',
      imageUrl: 'assets/icons/motor.jpg',
      link: '/motor-cycle',
    },
    {
      title: 'Heavy Motor Vehicle (Code 14)',
      imageUrl: 'assets/icons/code14.jpg',
      link: '/heavy-vehicle/code-forteen',
    },
  ]);

  constructor() {}

  ngOnInit(): void {}
  onClick(index: number) {
    console.log(index);
  }
}
