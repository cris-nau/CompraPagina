import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component implements OnInit {

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
    localStorage.removeItem('mail')
    localStorage.removeItem('contraseñaConf')
    localStorage.removeItem('contraseña')
  }

  mouseG() {
    localStorage.setItem('Producto2', "Mouse Gamer")
    localStorage.setItem('Costo2', "60")
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
  }

  principal(){
    this.router.navigate([""])
  }

}
