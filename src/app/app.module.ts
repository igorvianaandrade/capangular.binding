import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { PedidoViewComponent } from './pedido/pedido-view/pedido-view.component';


@NgModule({
  declarations: [
    AppComponent,    
    PedidoFormComponent,
    CategoriaFormComponent,
    NavbarComponent,
    PedidoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
