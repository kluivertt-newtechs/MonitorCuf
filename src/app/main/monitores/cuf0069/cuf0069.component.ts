import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoPageAction, PoTableColumn, PoCheckboxGroupOption  } from '@po-ui/ng-components';
import { Cuf0069Service } from 'src/app/service/cuf0069.service';
import { SessionStorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-cuf0069',
  templateUrl: './cuf0069.component.html',
  styleUrls: ['./cuf0069.component.css'],
})
export class Cuf0069Component implements OnInit {

  retornoCUF: any

  filtros: any = {
    PeriodoIni: '',
    PeriodoFim: '',
    PageSize: '' ,
    Page: '',
    Executado: '',
    Reenvio: '',
    Pendente: '',
    SemEmail: '',
    Enfileirado: '',
    Erro: '',
    Estabelec: '',
    Serie: '',
    NotaFiscal: '',
  };

  cuf0069Colunas: Array<PoTableColumn> = [
    { property: 'Situacao',   label: 'Situação'},
    { property: 'Estab',      label: 'Estab'},
    { property: 'Serie',      label: 'Série'},
    { property: 'NotaFiscal', label: 'Nota Fiscal'},
    { property: 'EmissaoNF',  label: 'Emissão'},
    { property: 'Cliente',    label: 'Cliente'},
    { property: 'CNPJ',       label: 'CNPJ'},
    { property: 'SitNota',    label: 'Sit.Nota'},
    { property: 'PdfNota',    label: 'PDF Nota'},
    { property: 'PdfBoleto',  label: 'PDF Boleto'},
    { property: 'PdfExtrato', label: 'PDF Extrato'},
    


  ];

  cuf0069Itens: any
  
readonly Acao69: Array<PoPageAction> = [
  {label: 'Atualiza'} 
];

public readonly breadcrumb: PoBreadcrumb = {
  items: [{ label: 'Home', link: '/' }, { label: 'CUF0069' }]
};


constructor(private service: Cuf0069Service,
  private storageService : SessionStorageService, 
  private router: Router) {}

ngOnInit(): void {
  this.setPeriodoIni()
  this.setPeriodoFim()
  //this.atualizarDados()
  this.filtros.Pendente = true
  this.filtros.Reenvio = true
  throw new Error('Metodo não implementado.');
}



atualizarDados() {
  this.filtros.page = 1;
    this.service.getAll(this.filtros).subscribe({
    next:result => {
      this.cuf0069Itens = result.items,
      this.storageService.setDados('DadosCuf0069', this.cuf0069Itens)
    },
    error:erro => {
      console.log(erro)
    },
  })
}

setPeriodoIni() {
  const today = new Date();
  this.filtros.PeriodoIni = ''
  const pastDateI = new Date(today.setDate(today.getDate() - 30));
  const yearI = pastDateI.getFullYear();
  const monthI = ('0' + (pastDateI.getMonth() + 1)).slice(-2); // Adiciona zero à esquerda se necessário
  const dayI = ('0' + pastDateI.getDate()).slice(-2); // Adiciona zero à esquerda se necessário
  this.filtros.PeriodoIni = `${yearI}-${monthI}-${dayI}`;
}

setPeriodoFim() {
  const today = new Date();
  this.filtros.PeriodoFim = ''
  const pastDateF = new Date(today.setDate(today.getDate()));
  const yearF = pastDateF.getFullYear();
  const monthF = ('0' + (pastDateF.getMonth() + 1)).slice(-2); // Adiciona zero à esquerda se necessário
  const dayF = ('0' + pastDateF.getDate()).slice(-2); // Adiciona zero à esquerda se necessário
  this.filtros.PeriodoFim = `${yearF}-${monthF}-${dayF}`;
} 

aDefinir() {
  
}

}
