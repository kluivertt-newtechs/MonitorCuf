import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-cuf0069',
  templateUrl: './cuf0069.component.html',
  styleUrls: ['./cuf0069.component.css']
})
export class Cuf0069Component implements OnInit {

  
readonly Acao69: Array<PoPageAction> = [
  {label: 'Atualiza'} 
];

public readonly breadcrumb: PoBreadcrumb = {
  items: [{ label: 'Home', link: '/' }, { label: 'CUF0069' }]
};

ngOnInit(): void {
  throw new Error('Metodo não implementado.');
}

}
