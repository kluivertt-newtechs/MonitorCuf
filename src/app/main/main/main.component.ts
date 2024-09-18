import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  homeMenu: Array<PoMenuItem> = [
    {
      label: 'DashBoard',
      shortLabel: 'DashBoard',
      icon: 'po-icon-chart-columns',
      link: '/main/dashboard',
    },

    {
      label: 'Monitores',
      shortLabel: 'Monitores',
      icon: 'po-icon-device-desktop',
      subItems: [
        {
          label: 'CUF0069',
          link: '/main/monitor/cuf0069',
          icon: 'po-icon-mail',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
