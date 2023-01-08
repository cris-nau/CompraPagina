import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente7',
  templateUrl: './componente7.component.html',
  styleUrls: ['./componente7.component.css']
})
export class Componente7Component implements OnInit {

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

  tabletaG() {
    localStorage.setItem('Producto3', "Tableta Grafica")
    localStorage.setItem('Costo3', "100")
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
  }

  principal(){
    this.router.navigate([""])
  }

}
