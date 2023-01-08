import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor(private router:Router) { }

  email1: string;
  password1: string;

  ngOnInit(): void {
    this.recup()
  }

  login(){
    this.router.navigate(["carrito"])
  }

  recup(){
    this.email1 = localStorage.getItem('mail')
    this.password1 = localStorage.getItem('contraseñaConf')
  }

  tecladoM() {
    localStorage.setItem('Producto1', "Teclado Mecanico")
    localStorage.setItem('Costo1', "70")
  }

  mouseG() {
    localStorage.setItem('Producto2', "Mouse Gamer")
    localStorage.setItem('Costo2', "60")
  }

  tabletaG() {
    localStorage.setItem('Producto3', "Tableta Grafica")
    localStorage.setItem('Costo3', "100")
  }

  Laptop() {
    localStorage.setItem('Producto4', "Asus Tuf Gaming")
    localStorage.setItem('Costo4', "1500")
  }

  Pad() {
    localStorage.setItem('Producto5', "Mouse Pad")
    localStorage.setItem('Costo5', "15")
  }

  SillaG() {
    localStorage.setItem('Producto6', "Silla Gamer")
    localStorage.setItem('Costo6', "150")
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

  cerrar(){
    this.router.navigate([""])
  }
}
