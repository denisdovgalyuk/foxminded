import { Component, Input } from '@angular/core';
import { HeaderMenu } from '../../interfaces/header-menu.i';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() menus!: HeaderMenu[];
}
