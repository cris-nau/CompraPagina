import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { FormsModule } from '@angular/forms';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import { Componente6Component } from './componente6/componente6.component';
import { Componente7Component } from './componente7/componente7.component';
import { Componente8Component } from './componente8/componente8.component';
import { Componente9Component } from './componente9/componente9.component';
import { Componente10Component } from './componente10/componente10.component';
import { Componente11Component } from './componente11/componente11.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component,
    Componente6Component,
    Componente7Component,
    Componente8Component,
    Componente9Component,
    Componente10Component,
    Componente11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
