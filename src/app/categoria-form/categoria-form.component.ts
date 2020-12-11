import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Categoria } from './../model/categoria.model'; 

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html'
  //styleUrls: ['./categoria-form.component.css']
})

export class CategoriaFormComponent {  

  @Input() tituloFormCategoria: string; 

  @Output() novaCategoriaEvent = new EventEmitter();
  
  descontos = ['2%', '5%', '10%', '20%'];

  model: Categoria = {nome: '', codigoCategoria : '', desconto: ''};

  submitted = false;

  codigoCategoria = '1';

  onSubmit() { this.submitted = true; 
    this.novaCategoriaEvent.emit(this.codigoCategoria);
  }

  newPedido() {    
    this.model = {nome: 'Teste', codigoCategoria : '50', desconto: ''};
  }
}