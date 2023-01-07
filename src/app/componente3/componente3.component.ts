import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router:Router) { }

  Teclado:any
  Costo:any
  email1: string;
  password1: string;

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["carrito"])
  }

  comprar(){
    this.Teclado = localStorage.getItem('Teclado')
    this.Costo = localStorage.getItem('Costo')
  }

  recup(){
    this.email1 = localStorage.getItem('mail1')
    this.password1 = localStorage.getItem('contraseñaConf1')
  }

  teclado(){
    this.router.navigate(["teclado"])
  }

  mouse(){
    this.router.navigate(["mouse"])
  }

  tableta(){
    this.router.navigate(["tableta"])
  }
  
  asus(){
    this.router.navigate(["asus"])
  }

  pad(){
    this.router.navigate(["pad"])
  }

  silla(){
    this.router.navigate(["silla"])
  }
}
