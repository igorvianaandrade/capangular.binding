import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html'
  //styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent {  

  @Input() tituloFormCategoria: string; 
  @Output() newItemEvent = new EventEmitter<string>(); //TODO
    
  model = {nomeCategoria: 'Eletrodomestico', codigoCategoria : '1', desconto: '10%'};

  submitted = false;

  onSubmit() { this.submitted = true; }

  newPedido() {
    this.newItemEvent.emit();//TODO
    this.model = {nomeCategoria: 'Teste', codigoCategoria : '50', desconto: ''};
  }
}