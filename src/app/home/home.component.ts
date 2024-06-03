import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  HomeMenu: Array<PoMenuItem> = [
    { 
      label: 'DashBoard', 
      shortLabel: 'DashBoard',
      icon: 'po-icon-chart-columns',
      link: '/dashboard',
        //this.router.navigate(['dashboard'])
    },
    
    { 
      label: 'Monitores', 
      shortLabel: 'Monitores',
      icon: 'po-icon-device-desktop',
      subItems:[//{label: 'CUF0030', action: this.onCuf0030},
                //{label: 'CUF0050', action: this.onCuf0050},
                {label: 'CUF0069', 
                 link: '/monitores/cuf0069'}
                //action: () => this.router.navigate(['cuf0069'])},
                ]
    }
  ];
  router: any;
  
}  
/*
  OnInit(): void {}

  private onCuf0030() {}

  private onCuf0050() {}
*/


