import { Component, OnInit } from '@angular/core';
import { Pedido } from './../../model/pedido.model';

@Component({
  selector: 'app-pedido-view',
  templateUrl: './pedido-view.component.html'
  //styleUrls: ['./pedido-view.component.css']
})
export class PedidoViewComponent implements OnInit {

  pedido:Pedido = {id: 0, cliente: '', produto: '', freteTarifado: false, data: ''};

  columnDefs = [
    { field: 'id', sortable: true, filter: true },
    { field: 'cliente', sortable: true, filter: true  },
    { field: 'produto', sortable: true, filter: true },
    { field: 'freteTarifado', sortable: true, filter: true },
    { field: 'data', sortable: true, filter: true }
  ];

  rowData : Array<Pedido> = [
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