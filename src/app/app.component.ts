import { Component } from '@angular/core';
import { IMenu } from './models/IMenu';
import { MenuService } from './services/menu.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'JbK53App';
  menuItems: IMenu[] = [];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(val => {
      this.menuItems = val;
    });
  }
}
