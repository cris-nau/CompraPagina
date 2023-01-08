import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente11',
  templateUrl: './componente11.component.html',
  styleUrls: ['./componente11.component.css']
})
export class Componente11Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  email1: string;

  regresar(){
    this.router.navigate(["register"])
  }

  cerrar(){
    this.router.navigate([""])
    localStorage.removeItem('mail')
    localStorage.removeItem('contraseñaConf')
    localStorage.removeItem('contraseña')
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
  }

  principal(){
    this.router.navigate([""])
  }

  login(){
    this.router.navigate(["carrito"])
  }

}
