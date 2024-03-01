import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoMenuItem } from '@po-ui/ng-components';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private router: Router) {

  }

  
  readonly MenuItens: Array<PoMenuItem> = [
    { label: 'DashBoard', action: () => this.router.navigate(['DashBoard'])},
    { label: 'Monitores', 
        subItems:[{label: 'CUF0030', action: this.onCuf0030},
                  {label: 'CUF0050', action: this.onCuf0050},
                  {label: 'CUF0069', action: () => this.router.navigate(['cuf0069'])},
                ]
    }
  ];

  private onClick() {
    alert('Clicou no item do menu')
  }

  private onCuf0030() {

  }

  private onCuf0050() {

  }


}


