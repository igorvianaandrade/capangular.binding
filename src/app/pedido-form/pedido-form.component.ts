import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {
  /* private produtoA = {
    nome:"Produto A ",
    categoria: "Tecnologia"
  }*/

  @Input() tituloFormPedido: string; // decorate the property with @Input()
  
  @Output() novoPedidoEvent = new EventEmitter();

  produtos = ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'];
  
  model = new Pedido(1, 'Hermione Granger', this.produtos[0], false, '09/12/2020');

  submitted = false;

  onSubmit() { this.submitted = true; 
    this.novoPedidoEvent.emit(this.codigoPedido);
  }

  codigoPedido = '1';

  newPedido() {    
    this.model = new Pedido(3, '', '', false, '');
  }
}