import { Moment } from 'moment';

export class Boleto {
    nomeConta: string;
    dataVencimento: Moment;
    valor: number;
    isContaPaga: boolean;
    codigoBarra: string
}