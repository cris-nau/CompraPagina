import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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

  tecladoM() {
    localStorage.setItem('Producto', "Teclado Mecanico")
    localStorage.setItem('Costo', "70")
  }

}
