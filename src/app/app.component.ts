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
    { label: 'DashBoard', action: this.onClick.bind(this) },
    { label: 'Monitores', 
        subItems:[{label: 'CUF0030', action: this.onClick.bind(this)},
                  {label: 'CUF0050', action: this.onClick.bind(this)},
                  {label: 'CUF0069', action: () => this.router.navigate(['cuf0069'])},
                ]
    }
  ];

/* link: './cuf0069'*/

  private onClick() {
    alert('Clicou no item do menu')
  }

  /*
  onCuf0069() {
    
  }
*/

  
}


