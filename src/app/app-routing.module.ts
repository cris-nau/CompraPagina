import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';


const routes: Routes = [
  { 
    path: "", component: Componente1Component, pathMatch: "full" 
  },
  { 
    path: "login", component: Componente2Component, pathMatch: "full" 
  },
  { 
    path: "register", component: Componente3Component, pathMatch: "full" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
