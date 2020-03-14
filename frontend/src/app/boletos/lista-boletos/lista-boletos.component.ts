import { Component, OnInit } from '@angular/core';
import { Boleto } from '../model/contaModel';
import * as moment from 'moment';

@Component({
  selector: 'lista-boletos',
  templateUrl: './lista-boletos.component.html',
  styleUrls: ['./lista-boletos.component.scss']
})
export class ListaBoletosComponent implements OnInit {

  listaContas: Boleto[] = [];

  constructor() { }

  ngOnInit() {
    this.listaContas = [
      {
        nomeConta: 'Cemig',
        dataVencimento: moment(),
        codigoBarra: '0000000',
        valor: 45.00,
        isContaPaga: true
      },
      {
        nomeConta: 'G6',
        dataVencimento: moment(),
        codigoBarra: '00000000',
        valor: 80.00,
        isContaPaga: false
      },
      {
        nomeConta: 'Condomínio',
        dataVencimento: moment(),
        codigoBarra: '000000000',
        valor: 335.00,
        isContaPaga: true
      },
    ];
  }

  onContaPaga(contaSelec) {
    contaSelec.isContaPaga = true;
    console.log(contaSelec);
  }

}
