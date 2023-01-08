import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente10Component } from './componente10/componente10.component';
import { Componente11Component } from './componente11/componente11.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';


const routes: Routes = [
  { 
    path: "", component: Componente1Component, pathMatch: "full" 
  },
  { 
    path: "login", component: Componente2Component, pathMatch: "full" 
  },
  { 
    path: "register", component: Componente3Component, pathMatch: "full" 
  },
  {
    path: "carrito", component: Componente4Component, pathMatch: "full" 
  },
  {
    path: "teclado", component: Componente5Component, pathMatch: "full" 
  },
  {
    path: "mouse", component: Componente6Component, pathMatch: "full" 
  },
  {
    path: "tableta", component: Componente7Component, pathMatch: "full" 
  },
  {
    path: "asus", component: Componente8Component, pathMatch: "full" 
  },
  {
    path: "pad", component: Componente9Component, pathMatch: "full" 
  },
  {
    path: "silla", component: Componente10Component, pathMatch: "full" 
  },
  {
    path: "factura", component: Componente11Component, pathMatch: "full" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
