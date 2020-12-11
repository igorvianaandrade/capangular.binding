import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Pedido } from './../model/pedido.model';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent {

  @Input() tituloFormPedido: string;
  
  @Output() novoPedidoEvent = new EventEmitter();

  produtos = ['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E'];
  
  model: Pedido = {id: 0, cliente: '', produto: '', freteTarifado: false, data: ''};

  submitted = false;

  codigoPedido = '1';
  
  onSubmit() { this.submitted = true; 
    this.novoPedidoEvent.emit(this.model);
  } 

  newPedido() {       
    this.model = {id: 0, cliente: '', produto: '', freteTarifado: false, data: ''};
  }
}