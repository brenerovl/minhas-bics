import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-boletos',
  templateUrl: './lista-boletos.component.html',
  styleUrls: ['./lista-boletos.component.scss']
})
export class ListaBoletosComponent implements OnInit {

  listaContas: Object[] = [];

  constructor() { }

  ngOnInit() {
    this.listaContas = [
      {
        id: 1,
        nome: 'Cemig',
        vencimento: '12/03/2020',
        valor: '45,00',
        isContaPaga: true
      },
      {
        id: 2,
        nome: 'G6',
        vencimento: '21/03/2020',
        valor: '80,00',
        isContaPaga: false
      },
      {
        id: 3,
        nome: 'Condomínio',
        vencimento: '20/03/2020',
        valor: '335,00',
        isContaPaga: true
      },
    ];
  }

  onContaPaga(contaSelec) {
    contaSelec.isContaPaga = true;
    console.log(contaSelec);
  }

}
