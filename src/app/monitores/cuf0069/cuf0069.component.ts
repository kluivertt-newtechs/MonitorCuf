import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoTableColumn, PoCheckboxGroupOption  } from '@po-ui/ng-components';

@Component({
  selector: 'app-cuf0069',
  templateUrl: './cuf0069.component.html',
  styleUrls: ['./cuf0069.component.css'],
})
export class Cuf0069Component implements OnInit {

  cuf0069Colunas: Array<PoTableColumn> = [
    { property: 'Selec',      label: 'Sel'},
    { property: 'situacao',   label: 'Situação'},
    { property: 'estab',      label: 'Estab'},
    { property: 'serie',      label: 'Série'},
    { property: 'NotaFiscal', label: 'Nota Fiscal'},
    { property: 'SitNF',      label: 'Sit Nota'},
    { property: 'EmissaoNF',  label: 'Emissão'},
    { property: 'Cliente',    label: 'Cliente'},
  ];

  cuf0069Checks: Array<PoCheckboxGroupOption> = [
    { label: 'Pendente',    value: '1'  },
    { label: 'Enviado',     value: '2',  },
    { label: 'Erro',        value: '3',  },
    { label: 'Reenvio',     value: '4',  },
    { label: 'Enfileirado', value: '5',  },
    { label: 'Sem E-mail',  value: '6',  }
  ]

  cuf0069Itens: any
  
readonly Acao69: Array<PoPageAction> = [
  {label: 'Atualiza'} 
];

public readonly breadcrumb: PoBreadcrumb = {
  items: [{ label: 'Home', link: '/' }, { label: 'CUF0069' }]
};

ngOnInit(): void {
  throw new Error('Metodo não implementado.');
}

atualizarDados() {
  
}

selecionaFiltro() {
  
}

}
