import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoPageAction,
  PoTableColumn,
  PoCheckboxGroupOption,
} from '@po-ui/ng-components';
import { Cuf0069Service } from '../service/cuf0069.service';
import { SessionStorageService } from 'src/app/service/storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cuf0069',
  templateUrl: './cuf0069.component.html',
  styleUrls: ['./cuf0069.component.css'],
})
export class Cuf0069Component implements OnInit {
  retornoCUF: any;

  filtros: any = {};

  myForm: FormGroup = this.fb.group({
    PeriodoIni: [''],
    PeriodoFim: [''],
    Executado: [''],
    Reenvio: [true],
    Pendente: [true],
    SemEmail: [''],
    Enfileirado: [''],
    Erro: [''],
    Estabelec: [''],
    Serie: [''],
    NotaFiscal: [''],
    Enviado: [''],
  });

  cuf0069Colunas: Array<PoTableColumn> = [
    { property: 'Situacao', label: 'Situação' },
    { property: 'Estab', label: 'Estab' },
    { property: 'Serie', label: 'Série' },
    { property: 'NotaFiscal', label: 'Nota Fiscal' },
    { property: 'EmissaoNF', label: 'Emissão' },
    { property: 'Cliente', label: 'Cliente' },
    { property: 'CNPJ', label: 'CNPJ' },
    { property: 'SitNota', label: 'Sit.Nota' },
    { property: 'PdfNota', label: 'PDF Nota' },
    { property: 'PdfBoleto', label: 'PDF Boleto' },
    { property: 'PdfExtrato', label: 'PDF Extrato' },
    { property: 'E-mail', label: 'E-mail' },
    { property: 'Usuário FAT', label: 'Usuário FAT' },
    { property: 'Cód Entrega', label: 'Cód Entrega' },
    { property: 'Hora Criação', label: 'Hora Criação' },
    { property: 'Hora Atual', label: 'Hora Atual' },
    { property: 'Erro Atual', label: 'Erro Atual' },
  ];

  cuf0069Itens: any;
  page: number = 1;
  pageSize!: number;

  readonly Acao69: Array<PoPageAction> = [{ label: 'Atualiza' }];

  constructor(
    private service: Cuf0069Service,
    private storageService: SessionStorageService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.atualizarDados();
  }

  atualizarDados() {
    this.filtros = this.myForm.getRawValue();
    this.service.getAll(this.filtros).subscribe({
      // this.service.getAllMonk().subscribe({
      next: (result) => {
        (this.cuf0069Itens = result.items),
          this.storageService.setDados('DadosCuf0069', this.cuf0069Itens);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }

  aDefinir() {}
}
