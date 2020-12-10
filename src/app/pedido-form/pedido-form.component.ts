import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Pedido } from '../pedido';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {

  @Input() tituloFormPedido: string;
  
  @Output() novoPedidoEvent = new EventEmitter();

  produtos = ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'];
  
  model = new Pedido(1, 'Hermione Granger', this.produtos[0], false, '09/12/2020');

  submitted = false;

  codigoPedido = '1';
  
  onSubmit() { this.submitted = true; 
    this.novoPedidoEvent.emit(this.codigoPedido);
  } 

  newPedido() {    
    this.model = new Pedido(3, '', '', false, '');
  }
}