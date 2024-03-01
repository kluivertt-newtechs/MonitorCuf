import { Component } from '@angular/core';

//import { PoModule, PoPageModule } from '@po-ui/ng-components';


@Component({
  selector: 'app-cuf0069',
  templateUrl: './cuf0069.component.html',
  styleUrls: ['./cuf0069.component.css'] 
})


export class Cuf0069Component {
/*
  readonly cuf0069Api = "http://acesso.newtechs.com.br:3392/api/cufp/v1/cufwapi001";
*/
  readonly cuf0069Colunas: Array<any> = [
    { property: 'Selec', label: 'Sel'},
    { property: 'situacao', label: 'Situação'},
    { property: 'estab', label: 'Estab'},
    { property: 'serie', label: 'Série'},
    { property: 'NotaFiscal', label: 'Nota Fiscal'},
    { property: 'SitNF', label: 'Sit Nota'},
    { property: 'EmissaoNF', label: 'Emissão'},
    { property: 'Cliente', label: 'Cliente'},

  ];

  constructor() {}

} 
