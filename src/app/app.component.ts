import { Component } from '@angular/core';
import { HeaderMenu } from './interfaces/header-menu.i';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headerMenu: HeaderMenu[] = [
    {
      label: 'Todo',
      path: 'todo'
    },
    {
      label: 'Attached Files',
      path: 'attached-files'
    }
  ]
}
