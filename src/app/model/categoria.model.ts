//import { Desconto } from './Desconto'; 

export class Categoria  {
    private nomeCategoria: string = '';
    private codigoCategoria: string = '';
    //private desconto: Desconto = new Desconto({});
    private desconto: string = '';

    constructor(categoriaInterface: CategoriaInterface){
        this.nomeCategoria = categoriaInterface.nome;
        this.codigoCategoria = categoriaInterface.codigoCategoria;
        this.desconto = categoriaInterface.desconto;
    }

    /*obterNome(): string {
        return this.nomeCategoria;
    }

    obterDesconto(): string {
        return this.desconto;
    }*/

}

export interface CategoriaInterface {
    nome?: string;
    codigoCategoria?: string;
    desconto?: string;
}

