import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/IMenu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
