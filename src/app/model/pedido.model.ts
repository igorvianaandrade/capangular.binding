/*export class Pedido {

    constructor(
      public id: number,
      public cliente: string,
      public produto: string,
      public freteTarifado: boolean,
      public data?: string
    ) {  }
  
  }
  */

  export interface Pedido {
    id: number,
    cliente: string;
    produto: string;
    freteTarifado: boolean;
    data?: string;
}