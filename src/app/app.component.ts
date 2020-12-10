import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'ecommercev2';
  tituloFormAppComponent = 'E-commerce - Formulário';

  novoItemCadastrado(itemPedido: string){
    alert('Item:' + itemPedido + 'cadastrado com sucesso!');
  }
}
