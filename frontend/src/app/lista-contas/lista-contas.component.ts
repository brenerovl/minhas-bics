import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.scss']
})
export class ListaContasComponent implements OnInit {

  listaContas: Object[] = [];

  constructor() { }

  ngOnInit() {
    this.listaContas = [
      {
        id: 1,
        nome: 'Cemig',
        validade: '12/03/2020',
        valor: '45,00',
        isContaPaga: true
      },
      {
        id: 2,
        nome: 'G6',
        validade: '21/03/2020',
        valor: '80,00',
        isContaPaga: false
      },
      {
        id: 3,
        nome: 'Condomínio',
        validade: '20/03/2020',
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
