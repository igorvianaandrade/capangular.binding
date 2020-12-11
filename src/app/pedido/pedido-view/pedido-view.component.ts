import { Component, OnInit } from '@angular/core';
import { Pedido } from './../../model/pedido.model';

@Component({
  selector: 'app-pedido-view',
  templateUrl: './pedido-view.component.html'
  //styleUrls: ['./pedido-view.component.css']
})
export class PedidoViewComponent implements OnInit {

  pedido:Pedido = {id: 0, cliente: '', produto: '', freteTarifado: false, data: ''};

  pedidos: Array<Pedido> = [
    {id: 1, cliente: 'Igor', produto: 'laptop', freteTarifado: false, data: '01/01/2021'},
    {id: 1, cliente: 'Ana', produto: 'laptop', freteTarifado: true, data: '01/01/2021'},
    {id: 1, cliente: 'Maria', produto: 'laptop', freteTarifado: false, data: '01/01/2021'},
    {id: 1, cliente: 'Rogerio', produto: 'laptop', freteTarifado: true, data: '01/01/2021'},
    {id: 1, cliente: 'Isis', produto: 'laptop', freteTarifado: false, data: '01/01/2021'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}