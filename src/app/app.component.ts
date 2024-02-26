import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { DashboardComponent } from './dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Monitores', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
