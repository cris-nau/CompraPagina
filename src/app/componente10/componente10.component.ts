import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente10',
  templateUrl: './componente10.component.html',
  styleUrls: ['./componente10.component.css']
})
export class Componente10Component implements OnInit {

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

  SillaG() {
    localStorage.setItem('Producto', "Silla Gamer")
    localStorage.setItem('Costo', "150")
  }

}
