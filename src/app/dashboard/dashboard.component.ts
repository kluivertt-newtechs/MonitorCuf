import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { DashboardService } from '../service/dashboard.service';
import { SessionStorageService } from '../service/storage.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

/*
  DataIni:any;
  DataFim:any 
*/
  retornoDados:any

  
  filtros: any = {
    PeriodoIni: "",
    PeriodoFim: ""
      
  }
  
  constructor(
    private service: DashboardService, 
    private storageService : SessionStorageService, 
  ) {}

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  ngOnInit(): void {
    this.setPeriodoIni();
    this.setPeriodoFim();
    this.atualizarDados();
    throw new Error('Metodo não implementado.');
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

  atualizarDados() {
    this.service.getAll(this.filtros).subscribe({
      next:result => {
        this.retornoDados = result.items,
        this.storageService.setDados('DadosDash', this.retornoDados)
      },
      error:erro => {
        console.log(erro)
      },
    })

  }

  qtdeNotasFiscais() {
    const qtNF = this.storageService.getDados('totalNotas')
    if (qtNF == null) {
      return '0'
    }
    return "0" //qtNF
  }

  qtdeEmails() {
    const qtEmail = this.storageService.getDados('totalNotas')
    if (qtEmail == null) {
      return '0'
    }
    return "0" //qtEmail
    
  }


}
