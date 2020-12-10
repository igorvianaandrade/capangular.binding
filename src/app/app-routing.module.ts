import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';

const routes: Routes = [
    {
        path: 'pedido',
        component: PedidoFormComponent 
    },
    {
        path: 'categoria',
        component: CategoriaFormComponent
    },
    {
        path: '',
        redirectTo: '/pedido', pathMatch: 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
