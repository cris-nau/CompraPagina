import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente10',
  templateUrl: './componente10.component.html',
  styleUrls: ['./componente10.component.css']
})
export class Componente10Component implements OnInit {

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

  SillaG() {
    localStorage.setItem('Producto6', "Silla Gamer")
    localStorage.setItem('Costo6', "150")
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
  }

  principal(){
    this.router.navigate([""])
  }

}
