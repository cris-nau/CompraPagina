import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente9',
  templateUrl: './componente9.component.html',
  styleUrls: ['./componente9.component.css']
})
export class Componente9Component implements OnInit {

  constructor(private router:Router) { }

  email1: string;
  
  ngOnInit(): void {
    this.recup()
  }

  login(){
    this.router.navigate(["carrito"])
  }

  regresar(){
    this.router.navigate(["register"])
  }

  cerrar(){
    this.router.navigate([""])
  }

  Pad() {
    localStorage.setItem('Producto5', "Mouse Pad")
    localStorage.setItem('Costo5', "15")
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
  }

  principal(){
    this.router.navigate([""])
  }

}
